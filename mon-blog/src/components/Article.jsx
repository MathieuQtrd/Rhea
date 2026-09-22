import { Col, Button, Card } from "react-bootstrap";
// On vérifie si l'information existe et si elle existe on la parcours avec .map()
// { tags && tags.map( ...

// Plus rapide d'écriture
// { tags?.map( ... 

// La propriété key permet à react d'identifier chaque élément d'une liste pour gérer les mise à jour du DOM

function Article({title, img, text, tags, onTagClick}) {
    return (
        <Col md={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={img.src} alt={img.alt} />
                <Card.Body>
                    <Card.Title className="my-3">{title}</Card.Title>
                    {/* { categories && categories.map((name, index) => (
                        <a href={"/keyword/" + name} className="btn btn-outline-dark me-3" key={index}>{name}</a>
                    ) )}
                    <hr /> */}
                    { tags && tags.map((tag) => (
                        <Button 
                            as="a"
                            href={`/tag/${tag.slug}`} 
                            variant="outline-dark"
                            className="me-3" 
                            key={tag.id}
                            onClick={(e) => onTagClick(e, tag.name)}
                            >
                                {tag.name}
                            </Button>
                    ) )}
                    <hr />
                    <Card.Text>
                        {text}
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default Article
