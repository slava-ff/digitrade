import { useEffect, useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { themeSelector } from "app/themeSlice"
import { Children } from "utils/interfaces"
import theme from "theme/theme"

const DynamicThemeProvider: React.FC<Children> = ({ children }) => {
  const [dynamicTheme, setDynamicTheme] = useState(theme)
  const fetchedTheme = themeSelector();

  useEffect(() => {
    if (fetchedTheme) {
      const newTheme = createTheme(theme, {
        palette: {
          primary: {
            main: fetchedTheme.theme?.brand?.brand500,
          },
          brand: fetchedTheme.theme?.brand,
        }
      })

      setDynamicTheme(newTheme)
    }
    
  }, [fetchedTheme])

  return (
    <ThemeProvider theme={dynamicTheme}>
      {children}
    </ThemeProvider>
  )
}

export default DynamicThemeProvider
