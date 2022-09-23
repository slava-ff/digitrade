import { useEffect } from "react"
import { Outlet } from "react-router-dom"

import { useTranslation } from "i18n/i18n"
import { mockConfig } from "mocks"
import { useAppDispatch } from 'app/hooks'
// import { dispatchTheme } from "app/themeSlice"
import { setTheme } from "app/themeSlice"
import { setI18n } from "app/i18nSlice"

const InitialRoute = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TO-DO: fetch config
    const config = mockConfig // here it's "fetching"

    config.theme && dispatch(setTheme(config.theme))
    config.i18n && dispatch(setI18n(config.i18n))
  }, [mockConfig])

  if (false) return <div>{t("loading")}...</div>

  return <Outlet />
}

export default InitialRoute
