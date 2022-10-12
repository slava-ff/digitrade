import { Components } from '@mui/material/styles'
import MuiCssBaseline from 'theme/components/global'
import MuiButton from 'theme/components/button'
import MuiFormControl from 'theme/components/formControl'

export const components = {
  MuiCssBaseline,
  ...MuiButton,
  ...MuiFormControl,
} as Partial<Components>
