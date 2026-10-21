import { Form } from 'react-bootstrap'
import ErrorMessage from './ErrorMessage'

export default function TaskInput({ label, name, value, onChange, placeholder, error }) {
    return (
        <Form.Group className='mb-3' controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <ErrorMessage message={error} />
        </Form.Group>
    )
}