import React, { useState } from 'react'
import { Controller, Control } from 'react-hook-form'
import { InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility, Password } from '@mui/icons-material'

import { CustomTextField } from 'components'
import { AuthForm, PasswordForm } from 'interfaces'

type Constants = {
  PASSWORD_NAME: keyof PasswordForm
  PASSWORD_CONFIRM_NAME: keyof PasswordForm
  AUTO_COMPLETE: string
  TYPE_TEXT: string
  TYPE_PASSWORD: string
}

const CONSTANTS: Constants = {
  PASSWORD_NAME: 'password',
  PASSWORD_CONFIRM_NAME: 'password_confirm',
  AUTO_COMPLETE: 'current-password',
  TYPE_TEXT: 'text',
  TYPE_PASSWORD: 'password',
}

interface PasswordController {
  confirmPassword?: boolean
  label: string
  placeholder: string
  validationText: string
  control: Control<AuthForm>
  required?: boolean
}

const PasswordController = ({
  confirmPassword = false,
  label,
  placeholder,
  validationText,
  control,
  required = false,
}: PasswordController) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleMouseDownUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const NAME = confirmPassword
    ? CONSTANTS.PASSWORD_NAME
    : CONSTANTS.PASSWORD_CONFIRM_NAME

  return (
    <Controller
      name={NAME}
      rules={{ required: validationText }}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <CustomTextField
          placeholder={placeholder}
          required={required}
          type={showPassword ? CONSTANTS.TYPE_TEXT : CONSTANTS.TYPE_PASSWORD}
          id={NAME}
          label={label}
          autoComplete={CONSTANTS.AUTO_COMPLETE}
          error={!!error}
          helperText={error && error.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onMouseDown={handleMouseDownUpPassword}
                  onMouseUp={handleMouseDownUpPassword}
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...field}
        />
      )}
    />
  )
}

export default PasswordController
