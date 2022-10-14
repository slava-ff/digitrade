import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthFormFields } from 'interfaces'
import { LoginForm, AuthTemplate } from 'components'
import { VALIDATION_TEXTS } from 'utils/constants'

const schema = yup.object({
  email: yup
    .string()
    .required(VALIDATION_TEXTS.EMAIL_REQUIRED)
    .email(VALIDATION_TEXTS.EMAIL_VALID),

  password: yup.string().required(VALIDATION_TEXTS.PASSWORD_REQUIRED),
})

const defaultValues: DefaultValues<AuthFormFields> = {
  email: '',
  password: '',
}

const LoginPage = () => {
  const { t } = useTranslation()

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
  }

  return (
    <AuthTemplate
      headerText={t('logIn')}
      descriptionText={t('loginDescription')}
      form={
        <LoginForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      }
    />
  )
}

export default LoginPage
