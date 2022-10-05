import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { Button, Link, Grid, Box, Typography, Paper } from '@mui/material'

import { ILoginInput } from 'interfaces'
import {
  EmailController,
  PasswordController,
  CompanyInfo,
  SideImage,
  LogoImage,
} from 'components'
import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { useTranslation } from 'hooks/i18n'
import styles from './LoginPage.styles'

const defaultValues: DefaultValues<ILoginInput> = {
  email: '',
  password: '',
}

const Login = () => {
  const { t } = useTranslation()
  const fetchedLayout = useAppSelector(layoutSelector)
  const [dynamicLayout, setDynamicLayout] = useState(fetchedLayout)

  useEffect(() => {
    if (fetchedLayout) {
      setDynamicLayout(fetchedLayout)
    }
  }, [fetchedLayout])

  const isImageLeftAligned =
    dynamicLayout?.layout?.loginPage.isSideImage &&
    dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const isImageRightAligned =
    dynamicLayout?.layout?.loginPage.isSideImage &&
    !dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const sideImageLink =
    dynamicLayout?.layout?.loginPage.isSideImage &&
    dynamicLayout?.layout?.loginPage.sideImageLink
  const logoLink = dynamicLayout?.layout?.loginPage.logoLink

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
      <SideImage imgLink={sideImageLink || ''} isShow={isImageLeftAligned} />

      <Grid item xs={12} md={6} component={Paper} elevation={0} square>
        <Box sx={styles.box_container}>
          <LogoImage imgLink={logoLink} />

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
              <Grid key={'dontHaveAccount'} item>
                <Typography variant="body2">{t('dontHaveAccount')}</Typography>
              </Grid>
              <Grid key={'signUp'} item>
                <Typography variant="body2">
                  <Link href="#">{t('signUp')}</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <CompanyInfo sx={styles.copyright} />
        </Box>
      </Grid>

      <SideImage imgLink={sideImageLink || ''} isShow={isImageRightAligned} />
    </Grid>
  )
}

export default Login
