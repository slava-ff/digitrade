import { useEffect, useState } from 'react'
import { Grid, Box, Paper } from '@mui/material'

import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'

import {
  CompanyInfo,
  SideImage,
  LogoImage,
  AuthDescription,
  Form,
  BackButton,
} from 'components'

const styles = {
  grid_container: { height: '100vh', justifyContent: 'center' },
  box_container: {
    pt: 4,
    mx: 'auto',
    px: 1,
    maxWidth: 'calc(360px + 1rem)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  logoImage: { mb: 3 },
  authDescription: { mt: 0 },
  box_form: { mt: 1 },
  copyright: { mt: 'auto', pt: 1.5 },
}

type AuthTemplate = {
  headerText: string
  descriptionText: string
  form?: React.ReactNode
  backBtnText?: string
  backBtnLink?: string
}

const AuthTemplate = ({
  headerText,
  descriptionText,
  form,
  backBtnText,
  backBtnLink,
}: AuthTemplate) => {
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

  const sideImageLink = dynamicLayout?.layout?.loginPage.sideImageLink

  const logoLink = dynamicLayout?.layout?.loginPage.logoLink

  const showBackBtn = !!backBtnLink && !!backBtnText

  return (
    <Grid container component="main" sx={styles.grid_container}>
      <SideImage imgLink={sideImageLink || ''} isShow={isImageLeftAligned} />

      <Grid item xs={12} md={6} component={Paper} elevation={0} square>
        <Box sx={styles.box_container}>
          <LogoImage imgLink={logoLink} sx={styles.logoImage} />

          {showBackBtn && (
            <BackButton backBtnText={backBtnText} backBtnLink={backBtnLink} />
          )}

          <AuthDescription
            headerText={headerText}
            descriptionText={descriptionText}
            sx={styles.authDescription}
          />

          {form && <Form form={form} sx={styles.box_form} />}

          <CompanyInfo sx={styles.copyright} />
        </Box>
      </Grid>

      <SideImage imgLink={sideImageLink || ''} isShow={isImageRightAligned} />
    </Grid>
  )
}

export default AuthTemplate
