import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { mockConfig } from "utils/constants"
import { useAppDispatch } from 'app/hooks'
import { setTheme } from "app/slice"

const InitialRoute = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TO-DO: fetch config
    const config = mockConfig
    const theme = { ...config.theme }

    theme && dispatch(setTheme(theme))
  }, [mockConfig])

  if (false) return <div>{t("loading")}...</div>

  return <Outlet />
}

export default InitialRoute
