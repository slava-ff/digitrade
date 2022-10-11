import { Controller, Control } from 'react-hook-form'

import { CustomTextField } from 'components'
import { ILoginInput } from 'interfaces'

type TConstants = {
  NAME: keyof ILoginInput
  ID: string
  AUTO_COMPLETE: string
}

const CONSTANTS: TConstants = {
  NAME: 'email',
  ID: 'email',
  AUTO_COMPLETE: 'email',
}

interface IEmailController {
  label: string
  placeholder: string
  validationText: string
  control: Control<ILoginInput>
  required?: boolean
}

const EmailController = ({
  label,
  placeholder,
  validationText,
  control,
  required = false,
}: IEmailController) => {
  return (
    <Controller
      name={CONSTANTS.NAME}
      rules={{ required: validationText }}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <CustomTextField
          placeholder={placeholder}
          required={required}
          id={CONSTANTS.ID}
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
