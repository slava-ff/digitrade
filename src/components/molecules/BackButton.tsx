import { Button, Link, SxProps } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { CustomTheme } from 'interfaces'

type BackButton = {
  backBtnLink: string
  backBtnText: string
  sx?: SxProps<CustomTheme> | undefined
}

const styles = { width: 'fit-content', px: '4px', py: 0 }

const BackButton = ({ backBtnLink, backBtnText, sx }: BackButton) => {
  return (
    <Button
      component={Link}
      startIcon={<ArrowBackIcon />}
      href={backBtnLink}
      variant="text"
      sx={{ ...styles, ...sx }}
    >
      {backBtnText}
    </Button>
  )
}

export default BackButton
