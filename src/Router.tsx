import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  InitialRoute,
  PrivateRoute,
  LoginPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from 'components'
import { ROUTES } from 'utils/constants'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.INITIAL_ROUTE} element={<InitialRoute />}>
          <Route path={ROUTES.PRIVATE_ROUTE} element={<PrivateRoute />}>
            {/* <Route index element={<MainPage />} /> */}
          </Route>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route
            path={ROUTES.FORGOT_PASSWORD}
            element={<ForgotPasswordPage />}
          />
          <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
