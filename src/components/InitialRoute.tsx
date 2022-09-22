import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { mockConfig } from "utils/constants"
import { RootState } from "app/store";
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { setTheme } from "app/slice"

const InitialRoute = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // fetch config
    // set in Redux
    const config = mockConfig

    config.theme && dispatch(setTheme(config.theme))
  }, [mockConfig])

  if (false) return <div>{t("loading")}...</div>

  return <Outlet />
}

export default InitialRoute
