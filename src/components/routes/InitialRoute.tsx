import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useTranslation } from 'hooks/i18n'
import { useAppDispatch } from 'store'
import { setTheme, setI18n, setLayout } from 'slices'
import defaultFetch from 'utils/api'
import { Loading } from 'components'

const InitialRoute = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [config, setConfig] = useState<any>()

  const fetchConfig = async () => {
    const config = await defaultFetch('mock')
    setConfig(config)
  }

  useEffect(() => {
    fetchConfig()
  }, [])

  useEffect(() => {
    if (config) {
      config.theme && dispatch(setTheme(config.theme))
      config.i18n && dispatch(setI18n(config.i18n))
      config.layout && dispatch(setLayout(config.layout))
    }
  }, [config])

  if (!config) return <Loading />

  return <Outlet />
}

export default InitialRoute
