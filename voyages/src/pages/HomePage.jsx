import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function HomePage () {
    return (
        <section>
            <Card className="border-0 shadow-sm overflow-hidden">
                <Row className="g-0 align-items-center">
                    <Col md={6}>
                        <Card.Body className="p-5">
                            <p className="text-primary fw-bold mb-2">
                                Voyages 
                            </p>
                            <h1 className="display-5 fw-bold">
                                Des idées de voyages
                            </h1>
                            <p className="lead text-muted">
                                Découvrez des destinations, préparez vos voyages et sauvegardez vos lieux favoris.
                            </p>
                            <Button as={Link} to ="/destinations" variant="outline-primary">
                                Voir les destinations
                            </Button>
                        </Card.Body>
                    </Col>
                    <Col md={6}>
                        <img 
                            className="home-image"
                            src="https://cdn.pixabay.com/photo/2016/08/14/13/43/gorges-du-verdon-1592934_1280.jpg"
                            alt="Paysage"
                        />
                    </Col>
                </Row>
            </Card>
        </section>
    );
}

export default HomePage;
