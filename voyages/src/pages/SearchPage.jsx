import { yupResolver } from "@hookform/resolvers/yup"
import { Alert, Badge, Button, Card, Col, Row, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import * as yup from "yup"
import { destinations } from "../data/destinations"

// Création du schema de validation yup
// https://github.com/jquense/yup
// Permet de mettre en place des contraintes de validation sur nos formulaires
const searchSchema = yup.object({
  keywords: yup
    // .min(2, "La recherche doit avoir au moins 2 caractères")
    .string(), // chaine de caractère 
  region: yup
    .string(),
})
  .test(
    "keywords-region",
    "Veuillez saisir une recherche ou choisir une région",
    function (value) {
      // return Boolean(value.keywords || value.region)
      if (value.keywords.trim() || value.region.trim()) {
        return true
      }

      return this.createError({
        path: "formError",
        message: "Veuillez saisir une recherche ou choisir une région"
      })

    }
  )


function SearchPage() {

  const navigate = useNavigate()
  // pour mettre en place une url contenant la saisie de la recherche sous form d'argument get

  const [searchParams] = useSearchParams()
  // nous permet de récupérer un ou des params de l'url

  // const currentSearch = searchParams.get('q') || ''
  const keywordsSearch = searchParams.get('keywords') || ''
  const regionSearch = searchParams.get('region') || ''

  // console.log(currentSearch)
  // Notre formulaire
  const {
    register,
    // permet de connecter nos champs 
    handleSubmit,
    formState: { errors },
    // Objet contenant les erreurs du form
  } = useForm({
    defaultValues: {
      // keywords: currentSearch
      keywords: keywordsSearch,
      region: regionSearch
    },
    resolver: yupResolver(searchSchema)
    // connexion du schema yup à notre formulaire pour la validation des champs
  })

  const onSubmit = (data) => {
    navigate(`/search?keywords=${encodeURIComponent(data.keywords)}&region=${encodeURIComponent(data.region)}`)
    // Navigation vers une nouvelle url, nous permet de passer un argument get dans l'url
    // Intêrets de passer des argument dans l'url
    // persistance de l'url
    // Copier l'url
    // la sauvegarder
    // historique navigateur

    // Si on utilise un useState pour la recherche : pas d'historique possible ...
  }

  // On filtre les destinations afin d'afficher le résultat selon la recherche de l'utilisateur
  const destinationsList = destinations.filter((destination) => {
    // const search = currentSearch.toLowerCase()
    // return (
    //   destination.name.toLowerCase().includes(search) ||
    //   destination.region.toLowerCase().includes(search) ||
    //   destination.capital.toLowerCase().includes(search)
    // )
    const search = keywordsSearch.toLowerCase()
    const re = regionSearch.toLowerCase()

    const keywordsResults = !search ||
      destination.name.toLowerCase().includes(search) ||
      destination.region.toLowerCase().includes(search) ||
      destination.capital.toLowerCase().includes(search)

    const regionResults = !re ||
      destination.region.toLowerCase().includes(re)

    return keywordsResults && regionResults

  })

  return (
    <section>
      <h1 className="mb-4">Rechercher une destination</h1>
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            {errors.formError?.message && (
              <p className="text-danger">
                {errors.formError.message}
              </p>
            )}
            <Form.Label>Votre recherche</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pays, région ou capitale"
              isInvalid={!!errors.keywords}
              {...register("keywords")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.keywords?.message}
            </Form.Control.Feedback>

            <Form.Select {...register("region")} className="mt-2">
              <option value="">Toutes les régions</option>
              <option value="Afrique">Afrique</option>
              <option value="Amerique">Amérique</option>
              <option value="Asie">Asie</option>
              <option value="Europe">Europe</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.region?.message}
            </Form.Control.Feedback>

            <Button
              variant="outline-primary"
              type="submit"
              className="mt-2"
            >
              Rechercher
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <hr />

      {(keywordsSearch || regionSearch) && (
        <>
          <h2 className="h4 mb-3">Résultats de la recherche</h2>

          {destinationsList.length > 0 ? (

            <Row className="g-4">
              {destinationsList.map((destination) => (
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
          ) : (
            <Alert variant="light">
              Aucun résultat ne correspond à votre recherche
            </Alert>
          )}
        </>
      )}



    </section>
  )
}

export default SearchPage
