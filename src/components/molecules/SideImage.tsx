import { Grid, SxProps } from '@mui/material'
import { CustomTheme } from 'interfaces'

type SideImage = {
  sx?: SxProps<CustomTheme> | undefined
  imgLink: string
  isShow: boolean
}

const styles = {
  backgroundRepeat: 'no-repeat',
  backgroundColor: (t: CustomTheme) =>
    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const SideImage = ({ imgLink = '', isShow = false, sx }: SideImage) =>
  isShow ? (
    <Grid
      item
      xs={false}
      md={6}
      sx={{ ...styles, backgroundImage: imgLink || '', ...sx }}
    />
  ) : null

export default SideImage
