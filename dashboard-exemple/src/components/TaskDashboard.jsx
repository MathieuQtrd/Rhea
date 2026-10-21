import React from 'react'
import { Row, Col, Card, Form, Button, Badge } from 'react-bootstrap'
import { useState } from 'react';




export default function TaskDashboard() {

    // Exercice :
    // Affichez dans le bloc principal les valeurs des champs lors de la saisie utilisateur

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [priority, setPriority] = useState('')
    // const [done, setDone] = useState(false)    

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'low',
        done: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    // Exercices :
    // Créer : 2 tâches par défaut et affichez les dans le bloc principal (col-8)
    // Rajoutez un bouton submit sur le form
    // Lors de la validation, on bloque la validation
    // On récupère les données
    // Controles à mettre en place :
    // Le title et la description ne doivent pas être vide
    // gestion des erreurs : en cas d'erreur : on bloque la validation et on affiche en dessous du champ le message d'erreur correspondant
    // S'il n'y a pas d'erreur, on rajoute la tâche à la liste des tâches et elle doit s'afficher naturellement
    // Si vous avez de l'avance, mettre en forme le rendu graphique
    // Affichez dans les 3 blocs prévus en haut de page : le total des tâches, celles terminées et celles à faire.

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = {}

        if (!formData.title.trim()) {
            formErrors.title = 'Le titre est obligatoire'
        }

        if (!formData.description.trim()) {
            formErrors.description = 'La description est obligatoire'
        }
        console.log(formErrors)
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setErrors({})
        console.log(formErrors)

        addTask(formData)

        setFormData({
            title: '',
            description: '',
            priority: 'low',
            done: false,
        })
    }

    const addTask = (newTask) => {
        const taskData = {
            id: Date.now(),
            ...newTask
        }
        setTasks([...tasks, taskData])
    }


    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Faire le devis du projet Automobile',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'high',
            done: false
        },
        {
            id: 2,
            title: 'Faire le slider du projet eShop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'low',
            done: true
        },
        {
            id: 3,
            title: 'Modifier le formulaire d\'ajout produit du projet eShop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit velit, pulvinar sed venenatis sed, venenatis at velit. Ut scelerisque magna at dui viverra, ut rutrum velit porta.',
            priority: 'medium',
            done: false
        },
    ])

    const priorityColor = (priority) => {
        if (priority == 'low') return 'success'
        if (priority == 'medium') return 'warning'
        return 'danger'
    }

    const priorityText = (priority) => {
        if (priority == 'low') return 'Basse'
        if (priority == 'medium') return 'Moyenne'
        return 'Haute'
    }

    const priorityOptions = [
        { value: 'low', label: 'Basse' },
        { value: 'medium', label: 'Moyenne' },
        { value: 'high', label: 'Haute' },
    ];

    const totalTasks = tasks.length
    const doneTasks = tasks.filter((task) => task.done).length 
    const todoTasks = totalTasks - doneTasks

    // Exercice : créer un nouveau projet Dashboard
        // découpez le projet en components avec au minimum, les components suivants :
        // src/ 
        //     - App.jsx
        //     - components/ 
        //         - TaskDashboard.jsx 
        //         - TaskForm.jsx - formulaire
        //         - TaskList.jsx - liste des tâches
        //         - TaskCard.jsx - bloc d'une tâche
        //         - TaskInput.jsx - champ du form
        //         - TaskTextarea.jsx - champ du form
        //         - TaskSelect.jsx - champ du form
        //         - TaskCheckbox.jsx - champ du form
        //         - ErrorMessage.jsx - Message d'erreur en dessous des champs du form  


    return (
        <>
            <div className='mb-4'>
                <h1 className='mb-4'>Tableau de bord</h1>
                <p className='text-muted mb-0'>Tâches</p>
            </div>
            <Row className='g-4 mb-4'>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>Total</h2>
                            <p className='fs-2'>{totalTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>Terminées</h2>
                            <p className='fs-2'>{doneTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <h2 className='h5'>En cours</h2>
                            <p className='fs-2'>{todoTasks}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='g-4 mb-4'>
                <Col lg={4}>
                    <Card className='shadow-sm border-0'>
                        <Card.Body>
                            <Card.Title className='mb-4'>
                                Nouvelle tâche
                            </Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='title'
                                        placeholder='Saisir un titre'
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                    {errors.title && <Form.Text className='text-danger'>{errors.title}</Form.Text>}
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        rows={4}
                                        name='description'
                                        placeholder='Saisir une description'
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                    {errors.description && <Form.Text className='text-danger'>{errors.description}</Form.Text>}
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Priorité</Form.Label>
                                    <Form.Select
                                        name='priority'
                                        value={formData.priority}
                                        onChange={handleChange}
                                    >
                                        {priorityOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>

                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Check
                                        type='checkbox'
                                        label='Tâche terminée'
                                        name='done'
                                        checked={formData.done}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <div className='mb-3'>
                                    <Button type='submit' variant='outline-dark'>Ajouter une tâche</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Row className='g-3'>
                        {tasks.map((task) => (
                            <Col md={12} key={task.id}>
                                <Card className='shadow-sm border-0'>
                                    <Card.Body>
                                        <h2 className='h5'>{task.title}</h2>
                                        <p>{task.description}</p>
                                        <div className='d-flex justify-content-between'>
                                            <Badge bg={task.done ? 'dark' : 'primary'}>
                                                {task.done ? 'Terminée' : 'En cours'}
                                            </Badge>
                                            <Badge bg={priorityColor(task.priority)}>
                                                {priorityText(task.priority)}
                                            </Badge>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </>
    )
}

