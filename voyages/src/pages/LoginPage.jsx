import { Button, Card, Col, Alert, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useAuth } from "../context/AuthContext"

// username : emilys
// password : emilyspass

// username : michaelj
// password : michaeljpass

// username : isabellad
// password : isabelladpass

// username : johnd
// password : johndpass

const loginSchema = yup.object({
    username: yup
        .string()
        .required("Le login est obligatoire"),
    password: yup
        .string()
        .required("Le mot de passe est obligatoire")
})

function LoginPage() {

    // const navigate = useNavigate()
    const { login, isAuthenticated } = useAuth()

    if (isAuthenticated) {
        return <Navigate to="/profile" />
    }


    const [apiError, setApiError] = useState("")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const onSubmit = async (data) => {
        setApiError("")

        try {
            const response = await fetch(
                "https://dummyjson.com/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password,
                    })
                }
            )
            if (!response.ok) {
                throw new Error("Identifiants incorrects")
            }
            const result = await response.json()
            console.log(result)
            login(result, result.accessToken)
            navigate("/")

        } catch (error) {
            console.log(error)
            setApiError(error.message)
        }
    }




    return (
        <>
            <Card className="mx-auto w-75 shadow-sm border-0">
                <Card.Body>
                    <h1 className="mb-3 pb-3 border-bottom">Connexion</h1>
                    {apiError && (
                        <Alert variant="danger">
                            {apiError}
                        </Alert>
                    )}
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
                                placeholder="Votre mot de passe"
                                isInvalid={!!errors.password}
                                {...register("password")}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="mt-2"
                        >
                            Connexion
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default LoginPage