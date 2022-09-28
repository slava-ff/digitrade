import * as React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

import { ICustomTheme, IState } from 'utils/interfaces'
import { useTranslation } from 'i18n/i18n'
import TextFieldCustom from 'components/TextFieldCustom'

// TO-DO LAYOUT!
const loginLayout = {
  isPicture: true,
  picLink: 'url(https://source.unsplash.com/random)',
  alignmentToTheLeft: false,
}

const isPictureLeftAligned =
  loginLayout.isPicture && loginLayout.alignmentToTheLeft
const isPictureRightAligned =
  loginLayout.isPicture && !loginLayout.alignmentToTheLeft

const gridContainerStyle = { height: '100vh', justifyContent: 'center' }
const gridPictureStyle = {
  backgroundImage: loginLayout?.picLink || '',
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

  const [values, setValues] = React.useState<IState>({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange =
    (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  // TO-DO: post login data
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  const handleClickShowPassword = () => {
    console.log('!values.showPassword', !values.showPassword)
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <Grid container component="main" sx={gridContainerStyle}>
      <CssBaseline />
      {isPictureLeftAligned && (
        <Grid item xs={false} md={6} sx={gridPictureStyle} />
      )}
      <Grid item xs={12} md={6} component={Paper} elevation={0} square>
        <Box sx={boxContainerStyle}>
          <Box sx={logoStyle} />
          <Typography component="h1" variant="h2" sx={loginStyle}>
            {t('logIn')}
          </Typography>
          <Typography
            component="body"
            variant="body1"
            sx={loginDescriptionStyle}
          >
            {t('loginDescription')}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={boxFormStyle}
          >
            {/* <TextFieldCustom 
              label={t("emailAddress")}
              placeholder={t("emailPlaceholder")}
            />
            <TextFieldCustom 
              label={t("password")}
              placeholder={t("passwordPlaceholder")}
              isPassword
            /> */}

            <TextField
              placeholder={t('emailPlaceholder')}
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('emailAddress')}
              name="email"
              autoComplete="email"
              onChange={handleChange('email')}
              value={values.email}
            />
            <TextField
              placeholder={t('passwordPlaceholder')}
              margin="normal"
              required
              fullWidth
              name="password"
              type={values.showPassword ? 'text' : 'password'}
              id="password"
              label={t('password')}
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onMouseDown={handleMouseDownUpPassword}
                      onMouseUp={handleMouseDownUpPassword}
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              sx={submitStyle}
            >
              {t('logIn')}
            </Button>

            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {t('dontHaveAccount')}
                </Link>
              </Grid>
            </Grid>

            <Copyright sx={copyrightStyle} />
          </Box>
        </Box>
      </Grid>
      {isPictureRightAligned && (
        <Grid item xs={false} md={6} sx={gridPictureStyle} />
      )}
    </Grid>
  )
}

export default Login
