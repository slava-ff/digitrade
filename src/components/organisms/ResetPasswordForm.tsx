import { useTranslation } from 'react-i18next'
import { Button, Box } from '@mui/material'

import { AuthForm } from 'interfaces'
import { PasswordController } from 'components'

const styles = {
  submitBtn: { mt: 3 },
}

const ResetPasswordForm = ({
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
      <PasswordController
        label={t('newPasswordLabel')}
        placeholder={t('newPasswordPlaceholder')}
        control={control}
        required
      />

      <PasswordController
        label={t('newPasswordConfirmLabel')}
        placeholder={t('newPasswordConfirmPlaceholder')}
        control={control}
        confirmPassword
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('resetPassword')}
      </Button>
    </Box>
  )
}

export default ResetPasswordForm
