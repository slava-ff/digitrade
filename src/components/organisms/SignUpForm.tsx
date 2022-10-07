import { SubmitHandler, Control, UseFormHandleSubmit } from 'react-hook-form'
import { Button, Link, Grid, Box, Typography, SxProps } from '@mui/material'
import { ILoginInput, ICustomTheme } from 'interfaces'
import { EmailController, PasswordController } from 'components'
import { useTranslation } from 'react-i18next'

const styles = {
  submitBtn: { mt: 3 },
  signUpLink: { mt: 1.5, justifyContent: 'center' },
}

type SignUpForm = {
  control: Control<ILoginInput>
  handleSubmit: UseFormHandleSubmit<ILoginInput>
  onSubmit: SubmitHandler<ILoginInput>
  sx?: SxProps<ICustomTheme> | undefined
}

const SignUpForm = ({ control, handleSubmit, onSubmit, sx }: SignUpForm) => {
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
        validationText={t('emailValidation')}
        control={control}
        required={true}
      />

      <PasswordController
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        validationText={t('passwordValidation')}
        control={control}
        required={true}
      />

      <PasswordController
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        validationText={t('passwordValidation')}
        control={control}
        required={true}
      />

      <Grid container>
        <Grid item xs />
        <Grid item>
          <Link href="#" variant="body2">
            {t('forgotPassword')}
          </Link>
        </Grid>
      </Grid>

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('logIn')}
      </Button>

      <Grid container spacing={0.5} sx={styles.signUpLink}>
        <Grid key={'dontHaveAccount'} item>
          <Typography variant="body2">{t('dontHaveAccount')}</Typography>
        </Grid>
        <Grid key={'signUp'} item>
          <Typography variant="body2">
            <Link href="/signup">{t('signUp')}</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SignUpForm
