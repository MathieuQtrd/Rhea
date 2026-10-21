import { Container, Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/">Mon Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/">Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Menu
