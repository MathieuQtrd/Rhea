import React from "https://esm.sh/react@19/?dev";
import { createRoot } from "https://esm.sh/react-dom@19/client?dev";

const root = createRoot(document.getElementById('root'))

const element = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour à tous'    
)

root.render(element)