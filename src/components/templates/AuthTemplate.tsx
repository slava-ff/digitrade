import { Grid, Box, Paper } from '@mui/material'

import {
  CompanyInfo,
  SideImage,
  LogoImage,
  AuthDescription,
  Form,
} from 'components'

const styles = {
  grid_container: { height: '100vh', justifyContent: 'center' },
  box_container: {
    mt: 4,
    mb: 1.5,
    mx: 'auto',
    px: 1,
    maxWidth: 'calc(360px + 1rem)',
    display: 'flex',
    flexDirection: 'column',
  },
  authDescription: { mt: 1 },
  box_form: { mt: 1 },
  copyright: { mt: 4 },
}

type AuthTemplate = {
  logoLink: string
  sideImageLink: string
  isImageLeftAligned: boolean
  isImageRightAligned: boolean
  headerText: string
  descriptionText: string
  form: React.ReactNode
}

const AuthTemplate = ({
  // : React.FC<Children>
  logoLink,
  sideImageLink,
  isImageLeftAligned,
  isImageRightAligned,
  headerText,
  descriptionText,
  form,
}: AuthTemplate) => {
  return (
    <Grid container component="main" sx={styles.grid_container}>
      <SideImage imgLink={sideImageLink || ''} isShow={isImageLeftAligned} />

      <Grid item xs={12} md={6} component={Paper} elevation={0} square>
        <Box sx={styles.box_container}>
          <LogoImage imgLink={logoLink} />

          <AuthDescription
            headerText={headerText}
            descriptionText={descriptionText}
            sx={styles.authDescription}
          />

          <Form form={form} sx={styles.box_form} />

          <CompanyInfo sx={styles.copyright} />
        </Box>
      </Grid>

      <SideImage imgLink={sideImageLink || ''} isShow={isImageRightAligned} />
    </Grid>
  )
}

export default AuthTemplate
