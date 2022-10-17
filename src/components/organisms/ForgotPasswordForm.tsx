import { useTranslation } from 'react-i18next'
import { Button, Box, CircularProgress } from '@mui/material'

import { AuthForm } from 'interfaces'
import { EmailController } from 'components'

const styles = {
  submitBtn: { mt: 3 },
}

const ForgotPasswordForm = ({
  control,
  handleSubmit,
  onSubmit,
  loading = false,
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

      <Button
        fullWidth
        type="submit"
        variant="contained"
        disabled={loading}
        startIcon={loading && <CircularProgress color="inherit" size={16} />}
        sx={styles.submitBtn}
      >
        {t('sendResetInstructionsBtn')}
      </Button>
    </Box>
  )
}

export default ForgotPasswordForm
