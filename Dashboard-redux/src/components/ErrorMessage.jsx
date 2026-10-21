import { Form } from 'react-bootstrap'

export default function ErrorMessage({ message }) {
    if(!message) {
        return null
    }
    return <Form.Text className="text-danger">{message}</Form.Text>
}