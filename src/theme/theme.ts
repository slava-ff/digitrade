import { createTheme } from '@mui/material/styles'
import { components } from 'theme/components'
import { baseTheme } from 'theme/baseTheme'

export default createTheme({
  ...baseTheme,
  components,
})
