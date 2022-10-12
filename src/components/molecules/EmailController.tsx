import { Controller, Control } from 'react-hook-form'

import { CustomTextField } from 'components'
import { AuthForm, EmailForm } from 'interfaces'

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
  validationText: string
  control: Control<AuthForm>
  required?: boolean
}

const EmailController = ({
  label,
  placeholder,
  validationText,
  control,
  required = false,
}: EmailController) => {
  return (
    <Controller
      name={CONSTANTS.NAME}
      rules={{ required: validationText }}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <CustomTextField
          placeholder={placeholder}
          required={required}
          id={CONSTANTS.NAME}
          label={label}
          autoComplete={CONSTANTS.AUTO_COMPLETE}
          error={!!error}
          helperText={error && error.message}
          {...field}
        />
      )}
    />
  )
}

export default EmailController
