- Créer quelques destinations (data/detinations.js) dans un JSON avec le format suivant
    {
        id: 1,
        slug: "japan",
        name: "Japon",
        region: "Asie",
        capital: "Tokyo",
        description:
            "Le Japon melange traditions anciennes, temples, megalopoles modernes et paysages naturels spectaculaires.",
        image:
            "https://cdn.pixabay.com/photo/2020/01/31/20/03/japan-4808857_1280.jpg",
    },

- Faire la HomePage 
    - une page d'accueil présentant le sujet du projet (texte, image ...)

- Faire la page Destinations : 
    - On récupère les destinations pour les lister :

        - chaque bloc devra avoir un lien vers la page détails
        - Link est un outil de react router permettant de faire un lien
        - exemple : 
        <Button as={Link} to="/destinations" variant="primary">Voir les destinations</Button>

- Faire la page AboutPage (du texte)

- Faire la page 404 (du texte avec un ou des liens retour vers l'accueil et/ou les destinations)

- Exercice :
    - Ajoutez des destinations
    - Améliorer le module de recherche
        - rajouter un nouveau champ concernant les régions (input type text ou select option)
            - avec un select option, il est nécessaire de ne proposer que les régions existantes
        - Validation yup :
            - keywords : facultatif mais minimum 2 caractères si rempli
            - region : facultatif
            - au moins un des deux champs doit être renseigné lors de la validation
            - voir ce que propose yup
        - Afficher les résultats correspondant à la recherche

        - Mettre en place la prise en compte des deux valeurs : region et keywords s'ils sont remplis

    - Faire une page Contact
        - Une route
        - un lien dans le menu
        - mettre en place les contraintes suivantes : (avec hook form et yup)
            - name : chaine, obligatoire
            - email : email, obligatoire
            - subject : chaine, obligatoire, minimum 5 caractères
            - message : chaine, obligatoire, minimum 10 caractères

    - Mettre en place une route pour les régions : /region/...
        - sur la page details d'une destination mettre la région en lien afin de pouvoir accéder au listing de cette région
        - dans cette route, on affiche les destinations correspondant à la région passée en argument 

Faire la page register :
    - ajout de la route
    - ajout du lien de menu
    - faire les champs suivant :
        - username
            - chaine
            - obligatoire
            -  minimum 4 caractères
        - password 
            - chaine
            - obligatoire
            - regex
                - minuscule
                - majuscule
                - chiffre
                - caractère spécial
            - minimum 8 caractères
        - email
            - chaine
            - obligatoire
            - email
        - firstname
            - chaine
            - obligatoire
        - lastname
            - chaine
            - obligatoire
        - gender
            - chaine
            - optionnel
        - avatar
            - chaine
            - optionnel
            - url
        
- Faire une page profile
    - ajout de la route
    - ajout du lien de menu
- Faire un component ProtectedRoute
    - Ce component doit rediriger vers l'index ou la page login si l'utilisateur essaie d'accéder à une page où il doit être connecté
- L'utilisateur ne doit avoir accès à Profile que s'il est connecté
- Sur la page profile :
    - Affichez toutes les informations de l'utilisateur 
        - on re déclenche un appel ajax afin d'aller chercher toutes ses informations 
        - https://dummyjson.com/docs/auth - doc
        - https://dummyjson.com/auth/me - url de l'appel ajax
- Faire une fonction logout dans AuthContext
- Modifier le menu :
    - Un utilisateur non connecté voit : Connexion, Inscription
    - Un utilisateur connecté voit : Profil, Déconnexion

- Créer un nouveau context pour gérer le thème graphique. (accéssibilité)
    - par exemple: thème light / dark
    - L'idée est de donner à l'utilisateur la possibilité de choisir de changer l'apparence du thème

- Donner la possibilité à un utilisateur connecté de mettre des destinations en favoris
    - par exemple en stockant les favoris dans le localStorage
    - Depuis une page détails d'une destination, un bouton ou un icone permettant de rajouter aux favoris (le bouton ne doit être visible que si l'utilisateur est connecté)
    - Affichage des favoris sur une nouvelle page ou sur la page profil
        - sur cette page l'utilisateur doit pouvoir retirer un favori
    - il n'est pas possible de rajouter plusieurs fois la même destination aux favoris
    - Il est possible d'afficher le bouton d'ajout aux favoris si l'utilisateur n'est pas connecté à condition qu'il ne fonctionne pas et de mettre un texte pour dire à l'utilisateur de se connecter afin de pouvoir ajouter cette destination.

- Mettre le projet sur github et m'envoyer le lien 