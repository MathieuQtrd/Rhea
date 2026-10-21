import { Container } from 'react-bootstrap'
import TaskDashboard from './components/TaskDashboard'

export default function App() {
  return (
    <Container fluid className='bg-light min-vh py-4'>
      <TaskDashboard />
    </Container>
  );
}