# JSX 
    https://react.dev/learn/writing-markup-with-jsx 

# Un seul élément parent
    Pas possible :
        .render(
            <h1 ckassName="titre">Bonjour à tous</h1>
            <p>Lorem ipsum</p>
        )

    Possible :
        .render(
            <div>
                <h1 ckassName="titre">Bonjour à tous</h1>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
            </div>
        )

# Les balises doivent être fermées
    Pour les balises auto fermantes
    <br> : <br />
    <img> : <img />
    <hr> : <hr />
    ...
    https://developer.mozilla.org/fr/docs/Glossary/Void_element

# Les composants
    Un composant est une fonction qui retourne du jsx
    Convention : Un composant commence par une majuscule et utilise le PascalCase, l'html doit être en minuscule

    .render(
        <MonComposant />
    )

# {/* un commentaire JSX */}

# Attributs en camelCase
    class : className
    for : htmlFor
    colspan : colSpan
    onclick : onClick
    ...

# Les attributs booléens 
    <input disabled> : <input disabled={true} /> ou <input disabled />

# Attribut style="" utilise un objet js
    <h1 style="color: red, font-size: 20px">Bonjour à tous</h1> : <h1 style="{{color: 'red', fontSize: '20px'}}">Bonjour à tous</h1>