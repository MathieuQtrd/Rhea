import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

// La Navbar est commune à toutes les pages
// <Outlet /> représente le contenu enfant (les pages qui seront appelées depuis MainLayout)

function MainLayout() {
  return (
    <>
      <Navbar />
      <Container className="py-4">
        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout
