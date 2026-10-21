import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { register as registerUser } from '../features/user/userSlice'

function RegisterPage() {

    const dispatch = useDispatch()

    // Initialisation du formulaire avec react hook form
    const {
        register, // permet de connecter les champs du formulaire à react hook form, et de définir les contyraintes validation
        handleSubmit, // Pour la soumission du formulaire
        reset, // permet de vider le formulaire
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            password: '',
            email: '',
        }
    })

    const onSubmit = (data) => {
        console.log(data)

        // on enlève le password des données utilisateur
        const { password, ...newUser } = data

        dispatch(registerUser(newUser))

        reset();
    }



    return (
        <Card className='mx-auto w-75 shadow-sm border-0'>
            <Card.Body>
                <h1 className='pb-3 border-bottom text-center'>Inscription</h1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId='username'>
                        <Form.Label>Login</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Votre login'
                            isInvalid={!!errors.username}
                            {...register('username', {
                                required: 'Le login est obligatoire',
                                minLength: {
                                    value: 4,
                                    message: 'Le login doit avoir 4 caractères minimum'
                                }
                            })}
                            /*
                                isInvalid : propriété de bootstrap (true / false)
                                !! permet de transformer une valeur en true ou false (valeur implicite)

                                register('username'), {...} retourne un objet contenant notamment :
                                    name : le nom du champ (ici : username)
                                    onChange 
                                    onBlur
                                    ref : permet de faire le lien entre le champ et hook form

                                    + nous permet de mettre en place des contraintes de validation
                            */
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.username?.message }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Votre mot de passe'
                            isInvalid={!!errors.password}
                            {...register('password', {
                                required: 'Le login est obligatoire',
                                minLength: {
                                    value: 8,
                                    message: 'Le mot de passe doit avoir 8 caractères minimum'
                                },
                                validate: {
                                    lowercase: (value) =>
                                        /[a-z]/.test(value) || 
                                    'Le mot de passe doit avoir au moins une minuscule',
                                    uppercase: (value) =>
                                        /[A-Z]/.test(value) || 
                                    'Le mot de passe doit avoir au moins une majuscule',
                                    number: (value) =>
                                        /[0-9]/.test(value) || 
                                    'Le mot de passe doit avoir au moins un chiffre',
                                     // regex de controle 
                                }
                            })}                            
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.password?.message }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Mail</Form.Label>
                        <Form.Control 
                            type='email'
                            placeholder='Votre mail'
                            isInvalid={!!errors.email}
                            {...register('email', {
                                required: 'Le mail est obligatoire',                                
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex
                                    message: 'Le format de l\'email est invalide'
                                }
                            })}                            
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.email?.message }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                        type='submit'
                        variant='outline-primary'
                        className='mt-2'
                    >
                        Inscription
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default RegisterPage
