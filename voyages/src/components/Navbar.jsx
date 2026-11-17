import { Navbar as BootstrapNavbar, Nav, Container, Button } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
    const { isAuthenticated, user, logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    
    return (
        <BootstrapNavbar bg="dark" data-bs-theme="dark">
            <Container>
                <BootstrapNavbar.Brand as={NavLink} to="/">
                    Voyages
                </BootstrapNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">
                        Accueil
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/destinations">
                        Destinations
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/search">
                        Rechercher
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">
                        Contact
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/about">
                        A propos
                    </Nav.Link>
                    {isAuthenticated ? (
                        <>
                            <Nav.Link as={NavLink} to="/profile" className="me-2">
                                Profil
                            </Nav.Link>
                            <Button
                                variant="outline-light"
                                onClick={handleLogout}
                            >
                                Déconnexion
                            </Button>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={NavLink} to="/register">
                                Inscription
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/login">
                                Connexion
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar