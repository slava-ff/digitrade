import { SxProps, Typography, Box } from '@mui/material'
import { ICustomTheme } from 'interfaces'

import { useTranslation } from 'react-i18next'

const styles = {
  description: { fontWeight: 500 },
}

type AuthDescription = {
  headerText: string
  descriptionText: string
  sx?: SxProps<ICustomTheme> | undefined
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
