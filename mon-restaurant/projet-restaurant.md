# Premier exercice
    Créer un nouveau projet React - Vite 
    - Créer un repertoire sur GitHub
    - Faire le push
    - me donner votre lien GitHub

# Reproduire la maquette (ou une maquette au choix)
    outil css au choix (bootstrap, Tailwind ...)

# Components
    Header
    Footer -- Dans le footer un copyright (l'année en cours doit être dynamique)
    Cart -- au choix
    Nav
    Bloc produit (bootstrap card par exemple)
    Button
    Sidebar
    Blocs de la sidebar
    ...

    Faire un maximum de produit pour appliquer ensuite les filtres de recherche
    Mettre les produits dans un fichiers extérieur (.js / .json)
    
# Mise en place du fonctionnel
    click sur tag dans la sidebar ou dans un bloc produit : On filtre les produits
    recherche par prix :  On filtre les produits
    click sur une catégorie :  On filtre les produits
    recherche par mots via l'input :  On filtre les produits (titre, catégorie, mot clé)

    On passe par un useContext pour gérer les filtres

    click sur ajouter au panier :
        On rajoute un useContext pour la gestion du panier
        on incrémente le nombre d'article au panier

        BONUS : On fait une modal ou autre sur le panier, au click on change le nombre d'article au panier, on met dans la modal le nom du produit, son prix unitaire, sa quantité, le prix total du panier
            Si on rajoute un produit déjà présent au panier on ne change que la quantité et le prix total
            On gère l'affichage de la modal avec un useSate()

    DEFI : 
        On rajoute un bouton retirer du panier au niveau des blocs produit
        On change le useState par un useReducer
        const [state, dispatch] = useReducer(cartReducer, initialState)
        https://react.dev/reference/react/useReducer 
        On incrémente ou décrémente le nombre de produit du panier (ne peut pas être négatif)
            BONUS :                     
                Si on ajoute un produit au panier voir plus haut (Bonus précédent)
                Si on retire un produit au panier :  
                    Si produit non présent, on ne fait rien
                    Si quantité > 1 on baisse sa quantité de 1
                    Si quantité = 1 on supprime le produit
                        on met à jour le prix total panier