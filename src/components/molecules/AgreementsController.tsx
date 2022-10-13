import { Controller, Control } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormControl, FormControlLabel, FormHelperText } from '@mui/material'

import { CustomCheckbox } from 'components'
import { AgreementsForm, AuthForm } from 'interfaces'
import { errorI18nKeyParser } from 'utils/common'

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
  control: Control<AuthForm>
  required?: boolean
}

const AgreementsController = ({
  label,
  control,
  required = false,
}: AgreementsController) => {
  const { t } = useTranslation()

  return (
    <Controller
      name={CONSTANTS.NAME}
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
            <FormHelperText error={!!error}>
              {errorI18nKeyParser(error.message, t)}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

export default AgreementsController
