# TMDB 
-----------
# https://developer.themoviedb.org/reference/getting-started
# https://api.themoviedb.org/3

    Créer une application de films type mini Netflix

    pour tmdb une clé est nécessaire, il faut créer un compte puis fournir la clé dans les headers du call fetch
    exemple : 
        dans les headers d'un call fetch :
            Authorization: `Bearer eyJhbGciOiJIUz................`,
            "Content-Type": "application/json",


# Fonctionnalités
    Liste de films
    recherche
    page détail

# Endpoints utiles
    discover/movie
    search/movie
    movie/{id}
    /movie/${id}?language=fr-FR

# Architecture conseillée
    pages
    components
    services
    routing

# Bonus
    favoris
    pagination
    genres

