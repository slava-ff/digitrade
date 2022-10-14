import { useTranslation } from 'react-i18next'
import { Button, Box } from '@mui/material'

import { AuthForm } from 'interfaces'
import { EmailController } from 'components'

const styles = {
  submitBtn: { mt: 3 },
}

const ForgotPasswordForm = ({
  control,
  handleSubmit,
  onSubmit,
  sx,
}: AuthForm) => {
  const { t } = useTranslation()
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ ...sx }}
    >
      <EmailController
        label={t('emailAddress')}
        placeholder={t('emailPlaceholder')}
        control={control}
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('sendResetInstructionsBtn')}
      </Button>
    </Box>
  )
}

export default ForgotPasswordForm
