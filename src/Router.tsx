// import "i18n/i18n"
// import { useTranslation } from 'react-i18next'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  InitialRoute,
  PrivateRoute,
  DynamicThemeProvider,
  LoginPage,
} from 'components'
import { useTranslation } from 'hooks/i18n'

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
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            {/* <Route path="signup" element={<SignUp />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DynamicThemeProvider>
  )
}

export default Router
