import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import InputLabel from '@mui/material/InputLabel'

import { ICustomTheme } from "utils/interfaces"
import { useTranslation } from "i18n/i18n"
import TextFieldCustom from "components/TextFieldCustom"

// TO-DO LAYOUT!
const loginLayout = {
  isPicture: true,
  picLink: 'url(https://source.unsplash.com/random)',
  alignmentToTheLeft: false,
}

const isPictureLeftAligned = loginLayout.isPicture && loginLayout.alignmentToTheLeft
const isPictureRightAligned = loginLayout.isPicture && !loginLayout.alignmentToTheLeft

const gridContainerStyle = { height: '100vh', justifyContent: 'center' }
const gridPictureStyle = {
  backgroundImage: loginLayout?.picLink || "",
  backgroundRepeat: 'no-repeat',
  backgroundColor: (t: ICustomTheme) =>
    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
const boxContainerStyle = {
  my: 4,
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
}
const logoStyle = { 
  backgroundImage: 'url(https://picsum.photos/320/180)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // m: 1,
  bgcolor: 'secondary.main', 
  alignSelf: 'center',
  width: 320,
  height: 180,
}
const loginStyle = { mt: 1 }
const loginDescriptionStyle = { fontWeight: 500 }
const boxFormStyle = { mt: 1 }
const submitStyle = { mt: 3, mb: 2 }
const copyrightStyle = { mt: 5 }

const Copyright = (props: any) => {
  const { t } = useTranslation()

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {t("companyInfo")}
    </Typography>
  );
}

const Login = () => {
  const { t } = useTranslation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" sx={gridContainerStyle}>
      <CssBaseline />
      {isPictureLeftAligned && (<Grid
        item
        xs={false}
        md={6}
        sx={gridPictureStyle}
      />)}
      <Grid
        item xs={12}
        md={6}
        component={Paper}
        elevation={0}
        square
      >
        <Box
          sx={boxContainerStyle}
        >
          <Box sx={logoStyle} />
          <Typography component="h1" variant="h2" sx={loginStyle}>
            {t("logIn")}
          </Typography>
          <Typography component="body" variant="body1" sx={loginDescriptionStyle}>
            {t("loginDescription")}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={boxFormStyle}>
            
            {/* <InputLabel htmlFor="email">
              {t("emailAddress")}
            </InputLabel> */}
            {/* <TextField
              placeholder='Enter your email'
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("emailAddress")}
              name="email"
              autoComplete="email"
              InputLabelProps={{ disableAnimation: true, sx: [] }}
            /> */}
            <TextFieldCustom 
              label={t("emailAddress")}
              placeholder={t("emailPlaceholder")}
            />
            <TextFieldCustom 
              label={t("password")}
              placeholder={t("passwordPlaceholder")}
              isPassword
            />
            {/* <InputLabel htmlFor="password">
              {t("password")}
            </InputLabel>
            <TextField
              placeholder='Enter password'
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={submitStyle}
            >
              {t("logIn")}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t("forgotPassword")}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {t("dontHaveAccount")}
                </Link>
              </Grid>
            </Grid>

            <Copyright sx={copyrightStyle} />

          </Box>
        </Box>
      </Grid>
      {isPictureRightAligned && (<Grid
        item
        xs={false}
        md={6}
        sx={gridPictureStyle}
      />)}
    </Grid>
  );
}

export default Login