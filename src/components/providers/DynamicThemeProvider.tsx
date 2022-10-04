import { useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { themeSelector } from 'slices'
import { Children } from 'interfaces'
import theme from 'theme/theme'

const DynamicThemeProvider: React.FC<Children> = ({ children }) => {
  const [dynamicTheme, setDynamicTheme] = useState(theme)
  const fetchedTheme = themeSelector()

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

  return <ThemeProvider theme={dynamicTheme}>{children}</ThemeProvider>
}

export default DynamicThemeProvider
