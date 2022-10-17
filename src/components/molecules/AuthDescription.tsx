import { SxProps, Typography, Box } from '@mui/material'
import { CustomTheme } from 'interfaces'

import { useTranslation } from 'react-i18next'

const styles = {
  description: {
    fontWeight: 500,
    letterSpacing: '0.1px',
    lineHeight: '1.5rem',
  },
}

type AuthDescription = {
  headerText: string
  descriptionText: string
  sx?: SxProps<CustomTheme> | undefined
}

const AuthDescription = ({
  headerText,
  descriptionText,
  sx,
}: AuthDescription) => {
  const { t } = useTranslation()

  return (
    <Box sx={{ ...sx }}>
      <Typography component="h1" variant="h2">
        {headerText}
      </Typography>
      <Typography variant="body1" sx={styles.description}>
        {descriptionText}
      </Typography>
    </Box>
  )
}

export default AuthDescription
