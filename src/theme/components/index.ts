import { Components } from '@mui/material/styles'
import MuiCssBaseline from 'theme/components/global'
import MuiButton from 'theme/components/button'
import MuiCheckbox from 'theme/components/checkbox'
// import MuiInputLabel from 'theme/components/inputLabel'

export const components = {
  MuiCssBaseline,
  ...MuiButton,
  ...MuiCheckbox,
  // ...MuiInputLabel,
} as Partial<Components>
