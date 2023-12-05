import { Link } from 'react-router-dom'

import { Button } from '@/components/Buttons'
import { Card, Container } from '@/components/Containers'
import { useAuthentication } from '@/hooks/AuthProvider'

export default function AdminDashboard() {
  const { user, logout } = useAuthentication()

  return (
    <Container>
      <Card className='p-8'>
        <p className='mb-2 text-sm font-semibold text-red-600'>Admin Dashboard</p>
        <h1 className='block text-2xl font-bold text-gray-800 dark:text-white sm:text-2xl'>
          Welcome back, {user?.email}
        </h1>
        <p className='mt-2 text-lg text-gray-700 dark:text-gray-400'>
          This should be a dashboard page for admin.
        </p>
      </Card>
    </Container>
  )
}
