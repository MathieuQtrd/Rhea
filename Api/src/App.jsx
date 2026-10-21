import { useState, useEffect } from 'react'

// Une API permet de récupérer ou de manipuler des données entre un application front et un serveur
// https://jsonplaceholder.typicode.com/

// useEffect permet d'éxécuter du code APRES le rendu du component
// https://react.dev/reference/react/useEffect

// fetch permet d'envoyer une requete HTTP (ajax)
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch



export default function App() {

    const [tasks, setTasks] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      console.log('Chargement du component')
      // le console.log s'affiche deux fois :
        // React test une première fois le code afin de détecter d'éventuelles erreurs puis le relance une deuxième fois. C'est donc normal.
        // Lié au mode dev
        // ne se produit pâs en prod !

        // Les crochets en fin de useEffect permettent de donner des dépendances, permettant de définir lorsque le useEffect doit s'exécuter.

        // }, []) : crochets vide : le useEffect se déclenche une fois après le rendu du component
        // }, [tasks, errors]) : le useEffect se déclenche une fois après le rendu du component mais aussi lors d'un changement d'état sur tasks ou errors.
        // }) : sans les crochets : le useEffect se déclenche une fois après le rendu du component puis après tout changement d'état 

    }, [])


    // fetch + then
    // useEffect(() => {
    //   // fetch('https://jsonplaceholder.typicode.com/todoooos?_limit=10') // erreur 404
    //   // fetch('https://lghlozhrgrzheglgn') // erreur sur le nom de domaine
    //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then((response) => {
    //     // fetch ne déclenchera pas d'erreur pour passer dans le catch() en cas de 404 (page non trouvée) ou 500 (erreur serveur)

    //     if(!response.ok) {
    //       throw new Error('Erreur HTTP')
    //     }

    //     return response.json() // JSON.parse()

    //   })
    //   .then((data) => {
    //     console.log(data)
    //     setTasks(data)
    //   })
    //   .catch(() => setError("Erreur lors du chargement"))
    //   .finally(() => setLoading(false))

    // }, [])

    const API_URL = import.meta.env.VITE_API_URL;
    console.log(import.meta.env)

    // feth + await
    useEffect(() => {
      const fetchTasks = async () => {
        // async pour préciser que la fonction est asynchrone
        // synchrone : le code s'exécute ligne par ligne, on attend chaque instruction avant de passer à la suivante
        // asynchrone : la code continu et n'attend pas les instructions précédentes (par exemple un traitement ajax (fetch))

        // await ne fonctionne que dans une fonction asynchrone
        // await = .then()
        // .then() : lorsque c'est prêt
        // await : on attend

        try {

          // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
          const response = await fetch(`${API_URL}/todos?_limit=10`)

          if(!response.ok) {
            throw new Error('Erreur HTTP')
          }

          const data = await response.json()
          console.log(data)
          setLoading(false)
          setTasks(data)

        } catch(error) {
          console.log(error)
          setLoading(false)
          setError('Erreur API')

        }
      }
      fetchTasks()
    }, [])

    if(loading) {
      return ( <p>Chargement  ...</p> )
    }

    if(error) {
      return ( <p>{error}</p> )
    }

    return (
      <ul>
          { tasks.map((task) => (
            <li key={task.id}>{task.id} : {task.title}</li>
          ))}
      </ul>
    )
}


