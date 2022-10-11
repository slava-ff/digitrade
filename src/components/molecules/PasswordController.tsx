import React, { useState } from 'react'
import { Controller, Control } from 'react-hook-form'
import { InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

import { CustomTextField } from 'components'
import { ILoginInput } from 'interfaces'

type TConstants = {
  NAME: keyof ILoginInput
  ID: string
  AUTO_COMPLETE: string
  TYPE_TEXT: string
  TYPE_PASSWORD: string
}

const CONSTANTS: TConstants = {
  NAME: 'password',
  ID: 'password',
  AUTO_COMPLETE: 'current-password',
  TYPE_TEXT: 'text',
  TYPE_PASSWORD: 'password',
}

interface IPasswordController {
  label: string
  placeholder: string
  validationText: string
  control: Control<ILoginInput>
  required?: boolean
}

const PasswordController = ({
  label,
  placeholder,
  validationText,
  control,
  required = false,
}: IPasswordController) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleMouseDownUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <Controller
      name={CONSTANTS.NAME}
      rules={{ required: validationText }}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <CustomTextField
          placeholder={placeholder}
          required={required}
          type={showPassword ? CONSTANTS.TYPE_TEXT : CONSTANTS.TYPE_PASSWORD}
          id={CONSTANTS.ID}
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
