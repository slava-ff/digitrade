import { SxProps, Typography } from '@mui/material'
import { ICustomTheme } from 'interfaces'

import { useTranslation } from 'react-i18next'

type CompanyInfo = {
  sx?: SxProps<ICustomTheme> | undefined
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
      {t('companyInfo')}
    </Typography>
  )
}

export default CompanyInfo
