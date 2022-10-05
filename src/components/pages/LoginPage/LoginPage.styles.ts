const grid_container = { height: '100vh', justifyContent: 'center' }
const box_container = {
  mt: 4,
  mb: 1.5,
  mx: 'auto',
  px: 1,
  maxWidth: 'calc(360px + 1rem)',
  display: 'flex',
  flexDirection: 'column',
}
const logo = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // m: 1,
  bgcolor: 'secondary.main',
  alignSelf: 'center',
  width: 320,
  height: 180,
}
const login = { mt: 1 }
const login_description = { fontWeight: 500 }
const box_form = { mt: 1 }
const submit = { mt: 3, mb: 2 }
const copyright = { mt: 4 }

export default {
  grid_container,
  box_container,
  logo,
  login,
  login_description,
  box_form,
  submit,
  copyright,
}
