import { SxProps, Box } from '@mui/material'
import { ICustomTheme } from 'interfaces'

type Form = {
  form: React.ReactNode
  sx?: SxProps<ICustomTheme> | undefined
}

const Form = ({ form, sx }: Form) => <Box sx={{ ...sx }}>{form}</Box>

export default Form
