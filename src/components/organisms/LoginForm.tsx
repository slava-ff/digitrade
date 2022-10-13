import { useTranslation } from 'react-i18next'
import { SubmitHandler, Control, UseFormHandleSubmit } from 'react-hook-form'
import { Button, Link, Grid, Box, Typography, SxProps } from '@mui/material'

import { AuthForm, CustomTheme } from 'interfaces'
import { EmailController, PasswordController } from 'components'
import { ROUTES } from 'utils/constants'

const styles = {
  submitBtn: { mt: 3 },
  signUpDescription: { mt: 1.5, justifyContent: 'center' },
  signUpBox: { lineHeight: '26px', marginLeft: '10px' },
  signUpBtn: { padding: 0 },
}

type LoginForm = {
  control: Control<AuthForm>
  handleSubmit: UseFormHandleSubmit<AuthForm>
  onSubmit: SubmitHandler<AuthForm>
  sx?: SxProps<CustomTheme> | undefined
}

const LoginForm = ({ control, handleSubmit, onSubmit, sx }: LoginForm) => {
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

      <PasswordController
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        control={control}
        required
      />

      <Grid container>
        <Grid item xs />
        <Grid item>
          <Button component={Link} href={ROUTES.FORGOT_PASSWORD} variant="text">
            {t('forgotPassword')}
          </Button>
        </Grid>
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('logIn')}
      </Button>

      <Grid container spacing={0.5} sx={styles.signUpDescription}>
        <Box key={'dontHaveAccount'}>
          <Typography variant="body2">{t('dontHaveAccount')}</Typography>
        </Box>
        <Box key={'signUp'} sx={styles.signUpBox}>
          <Button
            component={Link}
            href={ROUTES.SIGN_UP}
            variant="text"
            sx={styles.signUpBtn}
          >
            {t('signUp')}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default LoginForm
