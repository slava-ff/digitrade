import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { Grid, Box, Paper } from '@mui/material'

import { ILoginInput } from 'interfaces'
import {
  CompanyInfo,
  SideImage,
  LogoImage,
  LoginForm,
  AuthDescription,
} from 'components'
import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { useTranslation } from 'hooks/i18n'
import styles from './LoginPage.styles'

const defaultValues: DefaultValues<ILoginInput> = {
  email: '',
  password: '',
}

const LoginPage = () => {
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

          <AuthDescription
            headerText={t('logIn')}
            descriptionText={t('loginDescription')}
            sx={styles.authDescription}
          />

          <LoginForm
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            sx={styles.box_form}
          />

          <CompanyInfo sx={styles.copyright} />
        </Box>
      </Grid>

      <SideImage imgLink={sideImageLink || ''} isShow={isImageRightAligned} />
    </Grid>
  )
}

export default LoginPage
