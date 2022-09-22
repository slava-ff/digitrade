import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"


const PrivateRoute = () => {
  const { t } = useTranslation()

  useEffect(() => {
    // roure roles restrictions
    // fetch: colors, translations, layout
    // set in Redux
    // check token
  }, [])

  if (false) return <div>{t("loading")}...</div>
  if (false) return <Outlet />

  return <Navigate to="/login" />
}

export default PrivateRoute
