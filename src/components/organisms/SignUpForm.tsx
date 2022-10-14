import { useTranslation } from 'react-i18next'
import { Button, Link, Grid, Box, Typography } from '@mui/material'

import { AuthForm } from 'interfaces'
import {
  EmailController,
  PasswordController,
  AgreementsController,
  SignUpTermsText,
} from 'components'
import { ROUTES } from 'utils/constants'

const styles = {
  submitBtn: { mt: 3 },
  additionalPageDescription: { mt: 1.5, justifyContent: 'center' },
  additionalPageBox: { lineHeight: '26px', marginLeft: '2px' },
  additionalPageBtn: { padding: 0 },
}

const SignUpForm = ({ control, handleSubmit, onSubmit, sx }: AuthForm) => {
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

      <PasswordController
        label={t('passwordConfirm')}
        placeholder={t('passwordConfirmPlaceholder')}
        control={control}
        confirmPassword
        required
      />

      <AgreementsController
        label={<SignUpTermsText />}
        control={control}
        required
      />

      <Button type="submit" fullWidth variant="contained" sx={styles.submitBtn}>
        {t('signUp')}
      </Button>

      <Grid container spacing={0.5} sx={styles.additionalPageDescription}>
        <Box key={'alreadyAMember'}>
          <Typography variant="body2">{t('alreadyAMember')}</Typography>
        </Box>
        <Box key={'logIn'} sx={styles.additionalPageBox}>
          <Button
            component={Link}
            href={ROUTES.LOGIN}
            variant="text"
            sx={styles.additionalPageBtn}
          >
            {t('logIn')}
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default SignUpForm
