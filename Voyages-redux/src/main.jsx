import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./router/Router"
import { RouterProvider } from 'react-router-dom';

// import { AuthProvider } from './context/AuthContext';

// Appel du provider de redux
import { Provider } from 'react-redux'

// Appel du store
import { store } from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <AuthProvider> */}

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

    {/* </AuthProvider> */}
    
  </StrictMode>,
)
