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