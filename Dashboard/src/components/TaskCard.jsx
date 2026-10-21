import { Card, Badge } from 'react-bootstrap'

export default function TaskCard({ task }) {

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
            </Card.Body>
        </Card>
    )
}