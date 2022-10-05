import { Grid, SxProps } from '@mui/material'
import { ICustomTheme } from 'interfaces'

type SidePicture = {
  sx?: SxProps<ICustomTheme> | undefined
  imgLink: string
  isShow: boolean
}

const styles = {
  backgroundRepeat: 'no-repeat',
  backgroundColor: (t: ICustomTheme) =>
    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const SidePicture = ({ imgLink = '', isShow = false, sx }: SidePicture) =>
  isShow ? (
    <Grid
      item
      xs={false}
      md={6}
      sx={{ ...styles, backgroundImage: imgLink || '', ...sx }}
    />
  ) : null

export default SidePicture
