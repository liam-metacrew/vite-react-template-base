import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '@/hooks/AuthProvider'
import { AppRoutes } from '@/routes'

import { I18nProvider } from './i18n/i18nProvider'

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </I18nProvider>
    </BrowserRouter>
  )
}
