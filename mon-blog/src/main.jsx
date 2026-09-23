import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SearchProvider } from './context/SearchContext' // on appel le provider permettant d'avoir accès au context

// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // npm install react-bootstrap bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider> {/* Tous les éléments enfant auront accès au context */}
      <App />
    </SearchProvider>
  </StrictMode>,
)
