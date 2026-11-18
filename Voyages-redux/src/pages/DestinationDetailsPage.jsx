import { Alert, Badge, Button, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { destinations } from "../data/destinations"

function DestinationDetailsPage() {
  const { slug } = useParams() // récupération du paramètre dans l'url via useParams()
  console.log(slug)

  const destination = destinations.find((item) => item.slug === slug)
  console.log(destination)

  if (!destination) {
    return (
      <Alert variant="light">
        <h1>La destination recherchée est introuvable</h1>
        <Button
          as={Link}
          to="/destinations"
          variant="outline-primary"
          className="mt-3"
        >
          Retour aux destinations
        </Button>
      </Alert>
    )
  }

  return (
    <section>
      <Card className="shadow-sm border-0 overflow-hidden">
        <Row className="g-0">
          <Col lg={6}>
            <img className="detail-image" src={destination.image} alt={destination.name} />
          </Col>
          <Col lg={6}>
            <Card.Body className="p-4">
              <Badge bg="primary">
                {destination.region}
              </Badge>
              <h1>{destination.name}</h1>
              <p className="text-muted">
                <span className="fw-bold">Capitale: </span> {destination.capital}
              </p>
              <p className="text-muted">
                {destination.description}
              </p>
              <Button
                as={Link}
                to="/destinations"
                variant="outline-primary"
                className="mt-3"
              >
                Retour aux destinations
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </section>
  )
}

export default DestinationDetailsPage
