import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitialRoute from 'components/InitialRoute'
import PrivateRoute from 'components/PrivateRoute'
import Login from 'pages/LoginPage'
// import SignUp from "pages/SignUp"
// import MainPage from "pages/MainPage"

// path="/" OR path=""

export default function Pages() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialRoute />}>
            <Route path="" element={<PrivateRoute />}>
              {/* <Route index element={<MainPage />} /> */}
            </Route>
            <Route path="login" element={<Login />} />
            {/* <Route path="signup" element={<SignUp />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
