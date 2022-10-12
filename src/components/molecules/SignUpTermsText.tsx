import { useTranslation } from 'react-i18next'
import { Typography, Link } from '@mui/material'

const SignUpTermsText = () => {
  const { t } = useTranslation()

  return (
    <Typography variant="body2">
      {t('I agree to the ')}
      <Link href="#">{t('Terms of Service')}</Link>
      {t(' and ')}
      <Link href="#">{t('Privacy Policy')}</Link>
    </Typography>
  )
}

export default SignUpTermsText
