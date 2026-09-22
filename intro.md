# INTRO
-------

# ROLES DES LANGAGES
--------------------

# FRONT END (exécuté par le navigateur) 
-----------
- HTML : Structure d'une page web
- CSS  : Mise en forme (couleurs, tailles, bordures ...)
- JS   : Animations, intéractivité (jeux, carousel, évènements ...)

# BACK END (exécuté côté serveur)
----------
- PHP : Fonctionnalités (formulaire, sécurité, template), autre langage : Kava, .NET, Python, JS ...
- SQL : Communication avec les BDD : SGBD : MySQL, NoSQL, PostgresSQL ...

3 Solutions pour faire un site web :
------------------------------------
- From scratch : on part de zéro : liberté totale pour le dev en revanche temps de dev très long.
- Framework : React, VueJS, Angular | Laravel, Symfony, CakePHP ... Liberté importante, gros gain de temps sur le dev.
- CMS : Content Managing System : Wordpress, Drupal, Magento, Prestashop ... Temps de dev très rapide mais beaucoup de contraintes lié à l'outil.


# REACT 
-------

# React est une bibliotheque javascript pour construire des interfaces web avancées
    React permet d'écrire l'interface sous forme de composants, puis de se charger d'afficher et de  mettre à jour la page efficacement.

# Une application React est composée de composants.
    Chaque composant représente une partie de l'interface 

# Les composants sont des fonctions
    Un composant est généralement une fonction qui retourne du JSX

# L'interface dépend de l'état 
    Dans React l'interface est une fonction de l'état
        Si l'état change, l'interface se met à jour automatiquement

# React ne tourne pas seul
    React est une bibliotheque d'interface
    Pour pouvoir travailler avec React on utilise :
        NodeJS  -> exécuter les outils
        npm     -> pour installer les dépendances
        Vite    -> pour lancer le serveur et de compiler le code 

# Le cycle général d'une application React :
    Le dev écrit des composant JSX
    Vote compile le code
    React construit l'interface
    L'utilisateur interagit
    L'état change
    React met à jour la vue automatiquement.

# npm create vite@latest nom-du-projet
 
