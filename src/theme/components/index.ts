import { Components } from '@mui/material/styles'
import MuiCssBaseline from 'theme/components/global'
import MuiButton from 'theme/components/button'

export const components = {
  MuiCssBaseline,
  ...MuiButton,
} as Partial<Components>
