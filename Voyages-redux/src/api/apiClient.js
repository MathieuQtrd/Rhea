// URL de l'api
const API_URL = "https://qyklv804.webmo.me/api"

/*
admin - Admin@123
ENDPOINT de l'api :
-------------------
    POST    /auth/register.php
    POST    /auth/login.php
    GET     /auth/me.php
    POST    /contact/store.php
    GET     /contact/index.php
    --
    GET     /favorites/index.php
    POST    /favorites/store.php
    POST    /favorites/delete.php
*/

// function async réutilisable pour effectuer nos requetes HTTP vers l'api
// endpoint = route de l'API
// options = config supplémentaire (method, body, headers ...)

export async function apiRequest(endpoint, options = {}) {

    // Récupération du token JWT stocké dans le localStorage
    // Le token est ajouté après la connexion utilisateur
    const token = localStorage.getItem('token')

    // Création des headers HTTP 
    const headers = {
        // on envoie du JSON
        'Content-Type': 'application/json',

        // Rajoute les éventuels headers passés en argument :
        // exemple : Authorization, ...
        ...options.headers,
    }

    // Vérifie si un token existe
    if(token) {
        // Ancienne méthode standard JWT
        // Certains hébergement peuvent bloquer le header Authorization
        // headers.Authorization = `Bearer ${token}`

        // Solution alternative avec un header personnalisé
        // Notre API php récupérera ce header pour authentifier l'utilisateur
        headers['X-Auth-Token'] = token 
        // le JWT ne change pas
        // la façon de l'envoyer change du fait de ce serveur.

        // Authorization : header HTTP standard
        // X-Auth-Token : header HTTP personnalisé
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        // on passe les options : (body, method ...)
        ...options,
        // les headers
        headers,
    })

    // Tente de convertir la réponse JSON  en objet JS sinon on retourne null
    const data = await response.json().catch(() => null)

    // reponse.ok = false si : code HTTP : 400, 401, 404, 500 ...
    if(!response.ok) {
        throw new Error(data?.message || 'Une erreur est survenue')
    }

    return data
}