import { TextField, TextFieldProps } from '@mui/material'

const styles = {
  // minHeight: '5rem', // enable to avoid vertical shifting when error/helper text appears
  marginTop: '1.5rem',
}

const CustomTextField = (props: TextFieldProps) => {
  return <TextField margin="none" fullWidth sx={styles} {...props} />
}

export default CustomTextField
