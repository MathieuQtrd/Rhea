import React from 'react'
import { Row, Col, Card, Form, Button, Badge } from 'react-bootstrap'
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../features/tasksSlice';

export default function TaskDashboard() {

    const dispatch = useDispatch()

    const tasks = useSelector((state) => state.tasks.items)
    const filter = useSelector((state) => state.tasks.filter)

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') {
            return task.done
        }
        if (filter === 'todo') {
            return !task.done
        }
        if (filter === 'low') {
            return task.priority === 'low'
        }
        if (filter === 'medium') {
            return task.priority === 'medium'
        }
        if (filter === 'high') {
            return task.priority === 'high'
        }
        return task
    })
    
   
    

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
                    <TaskForm />
                </Col>
                <Col lg={8}>
                    <div className='my-3 justify-content-start d-flex'>
                        <Button
                            className="ms-2"
                            variant={filter === 'all' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('all'))}
                        >Toutes</Button>

                        <Button
                            className="ms-2"
                            variant={filter === 'low' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('low'))}
                        >Priorité basse</Button>
                        <Button
                            className="ms-2"
                            variant={filter === 'medium' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('medium'))}
                        >Priorité moyenne</Button>
                        <Button
                            className="ms-2"
                            variant={filter === 'high' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('high'))}
                        >Priorité haute</Button>
                        <Button
                            className="ms-2"
                            variant={filter === 'done' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('done'))}
                        >Terminées</Button>
                        <Button
                            className="ms-2"
                            variant={filter === 'todo' ? 'dark' : 'outline-dark'}
                            onClick={() => dispatch(setFilter('todo'))}
                        >En cours</Button>
                    </div>
                    <TaskList tasks={filteredTasks} />
                </Col>
            </Row>

        </>
    )
}

