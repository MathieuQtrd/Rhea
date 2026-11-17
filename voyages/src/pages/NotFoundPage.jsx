import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <section>
            <Card className="border-0 shadow-sm overflow-hidden">
                <Card.Body className="p-5">
                   <h1 className="display-1 fw-bold text-primary mb-5 pb-3 border-bottom">404</h1>
                   <p className="mb-3">La page demandée n'existe pas</p>
                    <Button as={Link} to="/" variant="outline-primary">
                        Accueil
                    </Button>
                </Card.Body>
            </Card>
        </section>
    );
}

export default NotFoundPage;
