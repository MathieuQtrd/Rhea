import { Form } from 'react-bootstrap'

export default function TaskCheckbox({ label, name, checked, onChange }) {
    return (
        <Form.Group className='mb-3' controlId={name}>
            <Form.Check
                type="checkbox"
                label={label}
                name={name}
                checked={checked}
                onChange={onChange}
            />
        </Form.Group>
    )
}