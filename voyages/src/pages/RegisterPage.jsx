import { Button, Card, Col, Row, Badge, Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const registerSchema = yup.object({
  username: yup
    .string()
    .required("Le login est obligatoire")
    .min(4, "Le login doit avoir 4 caractères minimum"),
  password: yup
    .string()
    .required("Le mot de passe est obligatoire")
    .matches(/[a-z]/, 'Le mot de passe doit avoir au moins une minuscule')
    .matches(/[A-Z]/, 'Le mot de passe doit avoir au moins une majuscule')
    .matches(/[0-9]/, 'Le mot de passe doit avoir au moins un chiffre')
    .matches(/[^a-zA-Z0-9]/, 'Le mot de passe doit avoir au moins un caractère spécial')
    .min(8, "Le mot de passe doit avoir 8 caractères minimum"),
  email: yup
    .string()
    .required("L'email est obligatoire")
    .email("Le format de l'email est invalide"),
  firstName: yup
    .string()
    .required("Le prénom est obligatoire"),
  lastName: yup
    .string()
    .required("Le nom est obligatoire"),
  gender: yup
    .string()
    .nullable(),
  avatar: yup
    .string()
    .nullable()
    .url("L'avatar doit être une url valide")
});
function RegisterPage() {

  const { isAuthenticated } = useAuth()
  // const navigate = useNavigate()
  if (isAuthenticated) {
    return <Navigate to="/profile" />
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      avatar: '',
    }
  })

  const onSubmit = () => {

  }


  return (
    <Card className="mx-auto w-75 shadow-sm border-0">
      <Card.Body>
        <h1 className="mb-3 pb-3 border-bottom">Inscription</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="username">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre login"
              isInvalid={!!errors.username}
              {...register("username")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Votre Mot de passe"
              isInvalid={!!errors.password}
              {...register("password")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Votre Email"
              isInvalid={!!errors.email}
              {...register("email")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre prénom"
              isInvalid={!!errors.firstName}
              {...register("firstName")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre nom"
              isInvalid={!!errors.lastName}
              {...register("lastName")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>Genre</Form.Label>
            <Form.Select {...register("gender")}>
              <option value="" disabled>...</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="avatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="text"
              placeholder="Votre avatar"
              isInvalid={!!errors.avatar}
              {...register("avatar")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.avatar?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            type="submit"
            variant="outline-primary"
            className="mt-2"
          >
            Inscription
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default RegisterPage
