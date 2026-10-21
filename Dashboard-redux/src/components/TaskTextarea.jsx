import { Form } from 'react-bootstrap'
import ErrorMessage from './ErrorMessage'

export default function TaskTextarea({ label, name, value, onChange, placeholder, error }) {
    return (
        <Form.Group className='mb-3' controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="textarea"
                rows={4}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <ErrorMessage message={error} />
        </Form.Group>
    )
}