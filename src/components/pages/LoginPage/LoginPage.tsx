import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import {
  Button,
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
} from '@mui/material'

import { ILoginInput } from 'interfaces'
import { EmailController, PasswordController } from 'components'
import { layoutSelector } from 'core/layoutSlice'
import { useTranslation } from 'hooks/i18n'
import styles from './LoginPage.styles'

const Copyright = (props: any) => {
  const { t } = useTranslation()

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {t('companyInfo')}
    </Typography>
  )
}

const Login = () => {
  const { t } = useTranslation()
  const fetchedLayout = layoutSelector()
  const [dynamicLayout, setDynamicLayout] = useState(fetchedLayout)

  useEffect(() => {
    if (fetchedLayout) {
      setDynamicLayout(fetchedLayout)
    }
  }, [fetchedLayout])

  const isPictureLeftAligned =
    dynamicLayout?.layout?.loginPage.isPicture &&
    dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const isPictureRightAligned =
    dynamicLayout?.layout?.loginPage.isPicture &&
    !dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const picLink =
    dynamicLayout?.layout?.loginPage.isPicture &&
    dynamicLayout?.layout?.loginPage.picLink
  const logoLink = dynamicLayout?.layout?.loginPage.logoLink

  const defaultValues: DefaultValues<ILoginInput> = {
    email: '',
    password: '',
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginInput>({
    defaultValues,
  })

  // TO-DO: post login data
  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    console.log('onSubmit:', data)
  }

  return (
    <Grid container component="main" sx={styles.grid_container}>
      <CssBaseline />
      {isPictureLeftAligned && (
        <Grid
          item
          xs={false}
          md={6}
          sx={{ ...styles.grid_picture, backgroundImage: picLink || '' }}
        />
      )}
      <Grid item xs={12} md={6} component={Paper} elevation={0} square>
        <Box sx={styles.box_container}>
          <Box sx={{ ...styles.logo, backgroundImage: logoLink || '' }} />
          <Typography component="h1" variant="h2" sx={styles.login}>
            {t('logIn')}
          </Typography>
          <Typography variant="body1" sx={styles.login_description}>
            {t('loginDescription')}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={styles.box_form}
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

            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link href="#" variant="body2">
                  {t('forgotPassword')}
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.submit}
            >
              {t('logIn')}
            </Button>

            <Grid container spacing={0.5} justifyContent="center">
              <Grid key={1} item>
                <Typography variant="body2">{t('dontHaveAccount')}</Typography>
              </Grid>
              <Grid key={1} item>
                <Typography variant="body2">
                  <Link href="#">{t('signUp')}</Link>
                </Typography>
              </Grid>
            </Grid>

            <Copyright sx={styles.copyright} />
          </Box>
        </Box>
      </Grid>
      {isPictureRightAligned && (
        <Grid item xs={false} md={6} sx={styles.grid_picture} />
      )}
    </Grid>
  )
}

export default Login
