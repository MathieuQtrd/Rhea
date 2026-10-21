import { Alert } from 'react-bootstrap'

export default function ErrorAlert({ message }) {
    if(!message) {
        return null
    }
    return <Alert variant="danger">{message}</Alert>
}