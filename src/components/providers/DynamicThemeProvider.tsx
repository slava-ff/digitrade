import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useTranslation } from 'react-i18next'

// For RTL:
import rtlPlugin from 'stylis-plugin-rtl' // TO-DO: update version to avoid warning in console. also v2.0.2 fixes it
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis' // and @types/stylis in dev deps

import { themeSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { Children } from 'interfaces'
import theme from 'theme/theme'

const cacheRtl = createCache({
  key: 'mui-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const cacheLtr = createCache({
  key: 'mui-ltr',
})

const DynamicThemeProvider: React.FC<Children> = ({ children }) => {
  const { i18n } = useTranslation()
  const [dynamicTheme, setDynamicTheme] = useState(theme)

  const fetchedTheme = useAppSelector(themeSelector)
  document.body.dir = i18n.dir()
  document.dir = i18n.dir()

  useEffect(() => {
    if (fetchedTheme.theme) {
      const newTheme = createTheme(theme, {
        palette: {
          primary: {
            ligth: fetchedTheme.theme?.brand[300],
            main: fetchedTheme.theme?.brand[500],
            dark: fetchedTheme.theme?.brand[600],
          },
          brand: fetchedTheme.theme?.brand,
        },
      })

      setDynamicTheme(newTheme)
    }
  }, [fetchedTheme])

  return (
    <CacheProvider value={i18n.dir() === 'rtl' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={dynamicTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default DynamicThemeProvider
