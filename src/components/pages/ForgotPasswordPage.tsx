import { useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthFormFields } from 'interfaces'
import { ForgotPasswordForm, AuthTemplate } from 'components'
import { VALIDATION_TEXTS, ROUTES } from 'utils/constants'

const schema = yup.object({
  email: yup
    .string()
    .required(VALIDATION_TEXTS.EMAIL_REQUIRED)
    .email(VALIDATION_TEXTS.EMAIL_VALID),
})

const defaultValues: DefaultValues<AuthFormFields> = {
  email: '',
}

const ForgotPasswordPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthFormFields>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<AuthFormFields> = (data) => {
    console.log('onSubmit:', data)
    setLoading(true)
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.email)
        navigate(`/${ROUTES.CHECK_EMAIL}`, { state: { email: data.email } })
        setLoading(false)
      }, 1000)
    })
  }

  return (
    <AuthTemplate
      headerText={t('forgotPassword')}
      descriptionText={t('forgotPasswordDescription')}
      backBtnText={t('backToLogIn')}
      backBtnLink={ROUTES.LOGIN}
      form={
        <ForgotPasswordForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
        />
      }
    />
  )
}

export default ForgotPasswordPage
