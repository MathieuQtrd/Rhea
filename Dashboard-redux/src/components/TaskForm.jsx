import { useState } from "react";
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import TaskInput from './TaskInput'
import TaskSelect from './TaskSelect'
import TaskTextarea from './TaskTextarea'
import TaskCheckbox from './TaskCheckbox'

import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasksSlice';

export default function TaskForm() {
    const dispatch = useDispatch()
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

        // onAddTask(formData)
        dispatch(addTask(formData))

        setFormData({
            title: '',
            description: '',
            priority: 'low',
            done: false,
        })
    }

    const priorityOptions = [
        { value: 'low', label: 'Basse' },
        { value: 'medium', label: 'Moyenne' },
        { value: 'high', label: 'Haute' },
    ];

    return (
        <Card className='shadow-sm border-0'>
            <Card.Body>
                <Card.Title className='mb-4'>
                    Nouvelle tâche
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                    <TaskInput 
                        label='Titre'
                        name='title'
                        value={formData.title}
                        placeholder='Saisir un titre'
                        error={errors.title}
                        onChange={handleChange}
                    />
                    <TaskTextarea 
                        label='Description'
                        name='description'
                        value={formData.description}
                        placeholder='Saisir une description'
                        error={errors.description}
                        onChange={handleChange}
                    />
                    <TaskSelect 
                        label='Priorité'
                        name='priority'
                        value={formData.priority}
                        onChange={handleChange}
                        options={priorityOptions}
                    />
                    <TaskCheckbox 
                        label='Terminée'
                        name='done'
                        checked={formData.done}
                        onChange={handleChange}
                    />
                    <div className='mb-3'>
                        <Button type='submit' variant='outline-dark'>Ajouter une tâche</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

