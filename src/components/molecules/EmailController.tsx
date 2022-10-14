import { Controller, Control } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextField } from '@mui/material'

import { AuthFormFields, EmailForm } from 'interfaces'
import { errorI18nKeyParser } from 'utils/common'

type Constants = {
  NAME: keyof EmailForm
  AUTO_COMPLETE: string
}

const CONSTANTS: Constants = {
  NAME: 'email',
  AUTO_COMPLETE: 'email',
}

interface EmailController {
  label: string
  placeholder: string
  control: Control<AuthFormFields>
  required?: boolean
}

const EmailController = ({
  label,
  placeholder,
  control,
  required = false,
}: EmailController) => {
  const { t } = useTranslation()

  return (
    <Controller
      name={CONSTANTS.NAME}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          fullWidth
          placeholder={placeholder}
          required={required}
          id={CONSTANTS.NAME}
          label={label}
          autoComplete={CONSTANTS.AUTO_COMPLETE}
          error={!!error}
          helperText={error && errorI18nKeyParser(error.message, t)}
          {...field}
        />
      )}
    />
  )
}

export default EmailController
