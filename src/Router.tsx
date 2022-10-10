import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  InitialRoute,
  PrivateRoute,
  DynamicThemeProvider,
  LoginPage,
  SignUpPage,
} from 'components'
import { ROUTES } from 'utils/constants'

function Router() {
  return (
    <DynamicThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.INITIAL_ROUTE} element={<InitialRoute />}>
            <Route path={ROUTES.PRIVATE_ROUTE} element={<PrivateRoute />}>
              {/* <Route index element={<MainPage />} /> */}
            </Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DynamicThemeProvider>
  )
}

export default Router
