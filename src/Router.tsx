// import "i18n/i18n"
// import { useTranslation } from 'react-i18next'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { InitialRoute, PrivateRoute } from 'components'
import Login from 'components/pages/LoginPage/LoginPage'
import { useTranslation } from 'hooks/i18n'

import DynamicThemeProvider from 'components/providers/DynamicThemeProvider'

// TO-DO: path="/" OR path=""
export const ROUTES = {
  INITIAL_ROUTE: '/',
  PRIVATE_ROUTE: '',
  LOGIN: 'login',
}

function Router() {
  const { i18n } = useTranslation()
  document.body.dir = i18n.dir()

  return (
    <DynamicThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.INITIAL_ROUTE} element={<InitialRoute />}>
            <Route path={ROUTES.PRIVATE_ROUTE} element={<PrivateRoute />}>
              {/* <Route index element={<MainPage />} /> */}
            </Route>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            {/* <Route path="signup" element={<SignUp />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DynamicThemeProvider>
  )
}

export default Router
