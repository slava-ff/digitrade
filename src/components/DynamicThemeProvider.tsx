import { useEffect } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import { useAppSelector, useAppDispatch } from 'app/hooks'
import { RootState } from "app/store"
import { Children } from "utils/interfaces"
import theme from "theme/theme"

const DynamicThemeProvider: React.FC<Children> = ({ children }) => {
  let dynamicTheme = theme
  const fetchedTheme = useAppSelector((state: RootState) => state.theme);

  useEffect(() => {
    // fetch OR from redux brand colors and layouts
    dynamicTheme = createTheme(theme, {
      palette: {
        brandColors: {
          color50: "#F0EBFE",
          color100: "#E2D8FD",
          color200: "#C5B2FB",
          color300: "#A88BF9",
          color400: "#8B65F7",
          color500: "#6F3FF5",
          color600: "#5832C4",
          color700: "#422593",
          color800: "#2C1961",
        }
      }
    })
    
    console.log('===>> ~ dynamicTheme', dynamicTheme)
  }, [fetchedTheme])

  return (
    <ThemeProvider theme={dynamicTheme}>
      {children}
    </ThemeProvider>
  )
}

export default DynamicThemeProvider
