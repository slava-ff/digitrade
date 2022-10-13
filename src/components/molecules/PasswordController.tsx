import React, { useState } from 'react'
import { Controller, Control } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

import { AuthForm, PasswordForm } from 'interfaces'
import { errorI18nKeyParser } from 'utils/common'

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
  control: Control<AuthForm>
  required?: boolean
}

const PasswordController = ({
  confirmPassword = false,
  label,
  placeholder,
  control,
  required = false,
}: PasswordController) => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleMouseDownUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const NAME = !confirmPassword
    ? CONSTANTS.PASSWORD_NAME
    : CONSTANTS.PASSWORD_CONFIRM_NAME

  return (
    <Controller
      name={NAME}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          fullWidth
          placeholder={placeholder}
          required={required}
          type={showPassword ? CONSTANTS.TYPE_TEXT : CONSTANTS.TYPE_PASSWORD}
          id={NAME}
          label={label}
          autoComplete={CONSTANTS.AUTO_COMPLETE}
          error={!!error}
          helperText={error && errorI18nKeyParser(error.message, t)}
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
