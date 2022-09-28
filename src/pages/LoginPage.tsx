import * as React from 'react'
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from 'react-hook-form'
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
import { VisibilityOff, Visibility, RuleSharp } from '@mui/icons-material'

import { ICustomTheme, ILoginInput } from 'utils/interfaces'
import { useTranslation } from 'i18n/i18n'

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

  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  // TO-DO: post login data
  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    console.log('onSubmit:', data)
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
          <Typography variant="body1" sx={loginDescriptionStyle}>
            {t('loginDescription')}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={boxFormStyle}
          >
            <Controller
              name="email"
              rules={{ required: t('emailValidation') }}
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  placeholder={t('emailPlaceholder')}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('emailAddress')}
                  autoComplete="email"
                  error={!!error}
                  helperText={error && error.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="password"
              rules={{ required: t('passwordValidation') }}
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  placeholder={t('passwordPlaceholder')}
                  margin="normal"
                  required
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  label={t('password')}
                  autoComplete="current-password"
                  error={!!error}
                  helperText={error && error.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onMouseDown={handleMouseDownUpPassword}
                          onMouseUp={handleMouseDownUpPassword}
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
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
