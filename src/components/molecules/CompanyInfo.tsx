import { SxProps, Typography } from '@mui/material'
import { CustomTheme } from 'interfaces'

import { useTranslation } from 'react-i18next'

type CompanyInfo = {
  sx?: SxProps<CustomTheme> | undefined
}

const CompanyInfo = ({ sx }: CompanyInfo) => {
  const { t } = useTranslation()

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ ...sx }}
    >
      {t('EXAMPLE: © COMPANY INFO')}
    </Typography>
  )
}

export default CompanyInfo
