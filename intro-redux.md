# Redux

https://redux.js.org/
https://redux-toolkit.js.org/

Redux est une bibliotheque de gestion d'état afin de gérer les données d'une application
    Redux permet de stocker les données dans un endroit central : le store

React sans redux 
    Chaque composant a ses propres données
        On passe les informations via les props ou avec useContext

Avec redux :
    Les données sont stockées dans le store
    Les composants lisent les données avec useSelector()
    Les composants modifient les données avec useDispatch()
    Redux met à jour le state
        React met à jour les affichages

store => contient toutes les données
state => les données elles mêmes
action => une demande de modification
reducer => application de la modification

Redux est la mémoire centrale de notre application

Les slices :
    Un slice représente une partie du state global (userSlice, productSlice, commentSlice ...)
    Un seul store qui cotient autant de slice que nécessaire

npm install @reduxjs/toolkit react-redux react-bootstrap bootstrap