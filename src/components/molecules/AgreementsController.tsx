import { Controller, Control } from 'react-hook-form'

import { CustomCheckbox } from 'components'
import { AgreementsForm, AuthForm } from 'interfaces'
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material'

const styles = {
  constrol: {
    marginTop: '1rem',
  },
  constrolLabel: {
    marginRight: 0,
  },
}

type Constants = {
  NAME: keyof AgreementsForm
}

const CONSTANTS: Constants = {
  NAME: 'agreements',
}

interface AgreementsController {
  label: string | React.ReactNode
  validationText: string
  control: Control<AuthForm>
  required?: boolean
}

const AgreementsController = ({
  label,
  validationText,
  control,
  required = false,
}: AgreementsController) => {
  return (
    <Controller
      name={CONSTANTS.NAME}
      rules={{ required: validationText }}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <FormControl required={required} error={!!error} sx={styles.constrol}>
          <FormControlLabel
            label={label}
            sx={styles.constrolLabel}
            control={
              <CustomCheckbox
                required={required}
                id={CONSTANTS.NAME}
                {...field}
              />
            }
          />
          {error && (
            <FormHelperText error={!!error}>{error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default AgreementsController
