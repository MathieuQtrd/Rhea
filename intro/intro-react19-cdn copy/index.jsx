import React from "https://esm.sh/react@19/?dev";
import { createRoot } from "https://esm.sh/react-dom@19/client?dev";

const container = document.getElementById('root')

const root = createRoot(container)

const element = <h1 className="titre" id="titre1"><span>Bonjour</span> à tous</h1>

root.render(element)