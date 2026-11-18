import { Button, Card, Col, Row, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import { destinations } from "../data/destinations";

function DestinationsPage () {
    return (
        <section>
            <div className="text-center mb-4">
                <h1 className="mb-3 pb-3 border-bottom">Destinations</h1>
                <p className="text-muted mb-0">Choississez une destination</p>
            </div>
            <Row className="g-4">
                { destinations.map((destination) => (
                    <Col md={6} lg={4} key={destination.id}>
                        <Card className="h-100 shadow-sm border-0 destination-card">
                            <Card.Img
                                variant="top"
                                src={destination.image}
                                alt={destination.name}
                            />
                            <Card.Body className="d-flex flex-column">
                                <div className="mb-2">
                                    <Badge bg="primary">
                                        {destination.region}
                                    </Badge>
                                </div>
                                <Card.Title>
                                    {destination.name}
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    <span className="fw-bold">Capitale :</span> {destination.capital}
                                </Card.Text>
                                <Button
                                    as={Link}
                                    to={`/destinations/${destination.slug}`}
                                    variant="outline-primary"
                                    className="mt-3"
                                >
                                    Voir le détail
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
}

export default DestinationsPage;
