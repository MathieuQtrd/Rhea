import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <section>
            <Card className="border-0 shadow-sm overflow-hidden">
                <Card.Body className="p-5">
                    <h1 className="display-5 fw-bold mb-5 pb-3 border-bottom">A propos</h1>
                    <p className="mb-2">
                        Voyages est un site proposant des idées de voyages, de découvertes, de parcours ...
                        Découvrez des destinations, préparez vos voyages et sauvegardez vos lieux favoris.
                        N'hésitez pas à nous faire des retours ou à nous proposer vos propres idées.
                        L'équipe reste à votre écoute ! 
                    </p>
                    <p className="mb-2">
                        Auto-stop, Aventure, Camping sauvage, Circuit touristique, Covoiturage, Evasion, Excursion, Exploration, Expédition, Périple, Promenade ... <br />
                    </p>
                </Card.Body>
            </Card>
        </section>
    );
}

export default AboutPage;
