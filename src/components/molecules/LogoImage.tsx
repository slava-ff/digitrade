import { Box, SxProps } from '@mui/material'
import { CustomTheme } from 'interfaces'

type LogoImage = {
  sx?: SxProps<CustomTheme> | undefined
  imgLink: string
}

const styles = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  bgcolor: 'secondary.main',
  alignSelf: 'center', // TO-DO: positioning in LoginPage
  width: 320,
  height: 180,
}

const LogoImage = ({ imgLink = '', sx }: LogoImage) => {
  return <Box sx={{ ...styles, backgroundImage: imgLink || '', ...sx }} />
}

export default LogoImage
