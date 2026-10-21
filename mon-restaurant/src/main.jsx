import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SearchProvider } from './context/SearchContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SearchProvider>
  </StrictMode>,
)
