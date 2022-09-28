import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useTranslation } from 'i18n/i18n'

const PrivateRoute = () => {
  const { t } = useTranslation()

  useEffect(() => {
    // roure roles restrictions
    // fetch: colors, translations, layout
    // set in Redux
    // check token
  }, [])

  if (false) return <div>{t('loading')}...</div>
  if (false) return <Outlet />

  return <Navigate to="/login" />
}

export default PrivateRoute
