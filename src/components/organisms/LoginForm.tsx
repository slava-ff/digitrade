import { useTranslation } from 'react-i18next'
import { Button, Link, Grid, Box, Typography } from '@mui/material'

import { AuthForm } from 'interfaces'
import { EmailController, PasswordController } from 'components'
import { ROUTES } from 'utils/constants'

const styles = {
  submitBtn: { mt: 3 },
  additionalPageDescription: { mt: 1.5, justifyContent: 'center' },
  additionalPageBox: { lineHeight: '26px', marginLeft: '10px' },
  additionalPageBtn: { padding: 0 },
}

const LoginForm = ({ control, handleSubmit, onSubmit, sx }: AuthForm) => {
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

      <Grid container spacing={0.5} sx={styles.additionalPageDescription}>
        <Box key={'dontHaveAccount'}>
          <Typography variant="body2">{t('dontHaveAccount')}</Typography>
        </Box>
        <Box key={'signUp'} sx={styles.additionalPageBox}>
          <Button
            component={Link}
            href={ROUTES.SIGN_UP}
            variant="text"
            sx={styles.additionalPageBtn}
          >
            {t('signUp')}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default LoginForm
