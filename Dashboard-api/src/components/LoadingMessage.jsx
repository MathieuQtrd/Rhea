import Spinner from 'react-bootstrap/Spinner';

export default function LoadingMessage() {
    return (
        <div className='text-center py-5'>
            <Spinner animation="border" />
            <p>Chargement des tâches...</p>
        </div>
    )
}