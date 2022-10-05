import { Typography } from '@mui/material'

import { useTranslation } from 'hooks/i18n'

const CompanyInfo = (props: any) => {
  const { t } = useTranslation()

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {t('companyInfo')}
    </Typography>
  )
}

export default CompanyInfo
