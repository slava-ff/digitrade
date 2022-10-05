import { SxProps, Typography } from '@mui/material'
import { ICustomTheme } from 'interfaces'

import { useTranslation } from 'hooks/i18n'

type Styles = {
  sx?: SxProps<ICustomTheme> | undefined
}

const CompanyInfo = ({ sx }: Styles) => {
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
