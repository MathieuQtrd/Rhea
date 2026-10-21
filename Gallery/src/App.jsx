import { useState } from 'react'
import { useSelector } from "react-redux";
import {
  BrowserRouter, // Active la possibilité de navigation dans l'application (sans rechargement de page)
  Routes, // va contenir toutes nos routes
  Route, // nos routes en question : une url correspond à une route
  NavLink, // pour créer un lien de navigation
  Navigate, // permet de rediriger nous même
} from 'react-router-dom'

import { Container, Navbar, Nav, Button } from 'react-bootstrap'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GalleryPage from './pages/GalleryPage'
import ProtectedRoute from './components/ProtectedRoute'


function App() {

  const isConnected = useSelector((state) => state.user.isConnected)

  return (
    <BrowserRouter>

      <Container className='bg-light min-vh-100 py-4'>
        <Navbar bg='white' expand='lg' className='shadow-sm mb-4 px-3'>
          <Navbar.Brand>Gallerie</Navbar.Brand>
          <Navbar.Toggle aria-controls='main-navbar' />

          <Navbar.Collapse id='main-navbar'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>
                Connexion
              </Nav.Link>

              <Nav.Link as={NavLink} to='/register'>
                Inscription
              </Nav.Link>

              <Nav.Link as={NavLink} to='/gallery'>
                Gallerie
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Routes>
          {/* Connexion */}
          <Route path='/' element={<LoginPage />} />

          {/* Inscription */}
          <Route path='/register' element={<RegisterPage />} />

          {/* Gallerie */}
          <Route path='/gallery' element={
            <ProtectedRoute>
              <GalleryPage />
            </ProtectedRoute>
            
            } 
          />

          {/* Si la route n'existe pas on redirige */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>


      </Container>
    </BrowserRouter>
  )
}

export default App
