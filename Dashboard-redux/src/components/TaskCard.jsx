import { Card, Badge, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTaskStatus } from '../features/tasksSlice'

export default function TaskCard({ task }) {

    const dispatch = useDispatch()

    const priorityColor = (priority) => {
        if (priority === 'low') return 'success'
        if (priority === 'medium') return 'warning'
        return 'danger'
    }

    const priorityText = (priority) => {
        if (priority === 'low') return 'Basse'
        if (priority === 'medium') return 'Moyenne'
        return 'Haute'
    }

    return (
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
                <hr />
                <div className='d-flex justify-content-between'>
                    <Button variant="outline-warning" onClick={() => dispatch(toggleTaskStatus(task.id))}>
                        {task.done ? 'Annuler' : 'Terminer'}
                    </Button>

                    <Button variant="outline-danger" onClick={() => dispatch(deleteTask(task.id))}>
                        Supprimer
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}