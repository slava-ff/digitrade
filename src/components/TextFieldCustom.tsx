import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { IState } from 'utils/interfaces'

interface ITextFieldCustom {
  label?: string
  defaultValue?: string
  placeholder?: string
  isPassword?: boolean
}

const boxStyle = {
  display: 'grid',
  // gridTemplateColumns: { sm: '1fr 1fr' },
  gap: 2,
  mt: "40px",
}

export default function TextFieldCustom({
  label,
  defaultValue,
  placeholder,
  isPassword = false,
}: ITextFieldCustom) {
  const [values, setValues] = React.useState<IState>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      noValidate
      sx={boxStyle}
    >
      <FormControl variant="outlined">
        {label && ( 
          <InputLabel shrink htmlFor={`${label}-input`}>
            {label}
          </InputLabel>
        )}

        <OutlinedInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          id={`${label}-input`}
          endAdornment={isPassword &&
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
