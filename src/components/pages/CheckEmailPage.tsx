import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { AuthTemplate } from 'components'
import { ROUTES } from 'utils/constants'

const CheckEmailPage = () => {
  const { t } = useTranslation()
  const { state } = useLocation()

  if (!(state && state.email)) {
    return null // TO-DO: 404 page
  }

  const descriptionTextWithEmail = `${t('checkYourEmailDescription')}${
    state.email
  }`

  return (
    <AuthTemplate
      headerText={t('checkYourEmail')}
      descriptionText={descriptionTextWithEmail}
      backBtnText={t('backToForgotPassword')}
      backBtnLink={ROUTES.FORGOT_PASSWORD}
    />
  )
}

export default CheckEmailPage
