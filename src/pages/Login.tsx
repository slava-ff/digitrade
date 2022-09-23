// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { useTranslation } from "react-i18next"
// import { Typography } from '@mui/material';

// import SignUpLayout from "components/SignUpLayout"
// import LoginForm from "components/LoginForm"

// export default function Login() {
//   const { t } = useTranslation()
//   const navigate = useNavigate()


//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) navigate("/", { replace: true })
//   }, [])

//   return (
//     <SignUpLayout auth={false} languageSelector={true} className="Login">
//       <Typography variant="h1">
//         {t("logInHeader")}
//       </Typography>
//       <Typography variant="h2">
//         {t("loginDescription")}
//       </Typography>

//       <LoginForm />
      
//       <div className="registration">
//         <div className="title">
//           <Typography variant="h3">
//             {t("noAccount")}
//           </Typography>
//         </div>

//         {/* <Button
//           variant={ButtonVariant.BlueDark}
//           color={TypColor.White}
//           onClick={() => navigate("/signup")}
//         >
//           {t("register")}
//         </Button> */}
//       </div>
//     </SignUpLayout>
//   )
// }

import * as React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { ICustomTheme } from "utils/interfaces"

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
  my: 8,
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
const boxFormStyle = { mt: 1 }
const submitStyle = { mt: 3, mb: 2 }
const copyrightStyle = { mt: 5 }

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {
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
          <Typography component="h1" variant="h2" sx={{ mt: 1 }}>
            Log In
          </Typography>
          <Typography component="body" variant="body1">
            Please fill your detail to access your account.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={boxFormStyle}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={submitStyle}
            >
              Log In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
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