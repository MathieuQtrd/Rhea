import { Navbar as BootstrapNavbar, Nav, Container, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Navbar() {
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
                </Nav>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar