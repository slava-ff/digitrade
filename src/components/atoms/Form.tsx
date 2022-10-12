import { SxProps, Box } from '@mui/material'
import { CustomTheme } from 'interfaces'

type Form = {
  form: React.ReactNode
  sx?: SxProps<CustomTheme> | undefined
}

const Form = ({ form, sx }: Form) => <Box sx={{ ...sx }}>{form}</Box>

export default Form
