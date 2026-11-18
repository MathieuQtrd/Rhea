import { Button, Card, Col, Row, Badge, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const contactSchema = yup.object({
    name: yup
        .string()
        .required("Le nom est obligatoire"),
    email: yup
        .string()
        .required("L'email est obligatoire")
        .email("L'email est invalide"),
    subject: yup
        .string()
        .required("Le sujet est obligatoire")
        .min(5, "Le sujet doit avoir au moins 5 caractères"),
    message: yup
        .string()
        .required("Le message est obligatoire")
        .min(10, "Le message doit avoir au moins 5 caractères"),
});

function ContactPage() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    })

    const onSubmit = () => {

    }


    return (
        <Card className="mx-auto w-75 shadow-sm border-0">
            <Card.Body>
                <h1  className="mb-3 pb-3 border-bottom">Contact</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="name">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Votre nom"
                            isInvalid={!!errors.name}
                            {...register("name")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Votre email"
                            isInvalid={!!errors.email}
                            {...register("email")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="subject">
                        <Form.Label>Sujet</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Votre sujet"
                            isInvalid={!!errors.subject}
                            {...register("subject")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.subject?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Votre message"
                            isInvalid={!!errors.message}
                            {...register("message")}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.message?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="outline-primary"
                        className="mt-2"
                    >
                        Envoyer
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default ContactPage
