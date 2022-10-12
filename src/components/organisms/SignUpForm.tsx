import { useTranslation } from 'react-i18next'
import { SubmitHandler, Control, UseFormHandleSubmit } from 'react-hook-form'
import { Button, Link, Grid, Box, Typography, SxProps } from '@mui/material'

import { AuthForm, CustomTheme } from 'interfaces'
import {
  EmailController,
  PasswordController,
  AgreementsController,
  SignUpTermsText,
} from 'components'
import { ROUTES } from 'utils/constants'

const styles = {
  submitBtn: { mt: 3 },
  signUpDescription: { mt: 1.5, justifyContent: 'center' },
  signUpBox: { lineHeight: '26px', marginLeft: '2px' },
  signUpBtn: { padding: 0 },
}

type SignUpForm = {
  control: Control<AuthForm>
  handleSubmit: UseFormHandleSubmit<AuthForm>
  onSubmit: SubmitHandler<AuthForm>
  sx?: SxProps<CustomTheme> | undefined
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
        required
      />

      <PasswordController
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        validationText={t('passwordValidation')}
        control={control}
        required
      />

      <PasswordController
        label={t('passwordConfirm')}
        placeholder={t('passwordConfirmPlaceholder')}
        validationText={t('passwordValidation')}
        control={control}
        confirmPassword
        required
      />

      <AgreementsController
        label={<SignUpTermsText />}
        control={control}
        validationText="TO-DO: validation text"
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('signUp')}
      </Button>

      <Grid container spacing={0.5} sx={styles.signUpDescription}>
        <Box key={'alreadyAMember'}>
          <Typography variant="body2">{t('alreadyAMember')}</Typography>
        </Box>
        <Box key={'logIn'} sx={styles.signUpBox}>
          <Button
            component={Link}
            href={ROUTES.LOGIN}
            variant="text"
            sx={styles.signUpBtn}
          >
            {t('logIn')}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default SignUpForm
