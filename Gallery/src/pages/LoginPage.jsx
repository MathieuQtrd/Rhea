import { Button, Card, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'
// usenavigate permet de rediriger vers une url correspondant à une route

function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
        register, 
        handleSubmit, 
        reset, 
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
        }
    })

    const onSubmit = (data) => {
      // on récupère les utilisateurs inscrit dans les localStorage
      const usersJSON = localStorage.getItem('users')

      const users = usersJSON ? JSON.parse(usersJSON) : []

      const newUser = users.find((user) => 
        user.username === data.username
      )

      if(newUser) {
        dispatch(login(newUser));      

        reset()

        // on redirige vers gallerie
        navigate('/gallery', { replace: true })
      } else {
        alert('Login incorrect  !')
      }

    }

  return (
    <Card className='mx-auto w-75 shadow-sm border-0'>
            <Card.Body>
                <h1 className='pb-3 border-bottom text-center'>Connexion</h1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId='username'>
                        <Form.Label>Login</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Votre login'
                            isInvalid={!!errors.username}
                            {...register('username', {
                                required: 'Le login est obligatoire',                               
                            })}                           
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.username?.message }
                        </Form.Control.Feedback>
                    </Form.Group>                  

                    <Button 
                        type='submit'
                        variant='outline-primary'
                        className='mt-2'
                    >
                        Connexion
                    </Button>
                </Form>
            </Card.Body>
        </Card>
  )
}

export default LoginPage
