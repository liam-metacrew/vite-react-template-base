import { Card, Container } from '@/components/Containers'
import { useAuthentication } from '@/hooks/AuthProvider'

export default function UserDashboard() {
  const { user } = useAuthentication()

  return (
    <Container>
      <Card className='p-8'>
        <p className='mb-2 text-sm font-semibold text-blue-600'>User Dashboard</p>
        <h1 className='block text-2xl font-bold text-gray-800 dark:text-white sm:text-2xl'>
          Welcome back, {user?.email}
        </h1>
        <p className='mt-2 text-lg text-gray-700 dark:text-gray-400'>
          This should be a dashboard page for general user.
        </p>
        <div className='mt-8 grid flex-col items-center gap-2 text-center sm:flex-row sm:gap-3'></div>
      </Card>
    </Container>
  )
}
