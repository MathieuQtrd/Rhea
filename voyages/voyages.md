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