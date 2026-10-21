import React from 'react'
import { Row, Col, Card, Form, Button, Badge } from 'react-bootstrap'
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';



export default function TaskDashboard() {

    // Exercice :
    // Affichez dans le bloc principal les valeurs des champs lors de la saisie utilisateur

    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [priority, setPriority] = useState('')
    // const [done, setDone] = useState(false)    

    

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
                    <TaskForm onAddTask={addTask} />
                </Col>
                <Col lg={8}>
                    <TaskList tasks={tasks} />
                </Col>
            </Row>

        </>
    )
}

