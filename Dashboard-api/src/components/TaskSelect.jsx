import { Form } from 'react-bootstrap'

export default function TaskSelect({ label, name, value, onChange, options }) {
    return (
        <Form.Group className='mb-3' controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Select
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}