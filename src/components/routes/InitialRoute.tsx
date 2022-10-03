import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useTranslation } from 'hooks/i18n'
import { mockConfig } from 'mocks'
import { useAppDispatch } from 'hooks/reduxToolKitHooks'
// import { dispatchTheme } from "app/themeSlice"
import { setTheme } from 'core/themeSlice'
import { setI18n } from 'core/i18nSlice'
import { setLayout } from 'core/layoutSlice'

const InitialRoute = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TO-DO: fetch config
    const config = mockConfig // here it's "fetching"

    config.theme && dispatch(setTheme(config.theme))
    config.i18n && dispatch(setI18n(config.i18n))
    config.layout && dispatch(setLayout(config.layout))
  }, [mockConfig])

  if (!mockConfig) return <div>{t('loading')}...</div>

  return <Outlet />
}

export default InitialRoute
