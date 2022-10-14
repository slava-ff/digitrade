import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthFormFields } from 'interfaces'
import { ResetPasswordForm, AuthTemplate } from 'components'
import { REGEX_RULES, VALIDATION_TEXTS } from 'utils/constants'

const schema = yup.object({
  password: yup
    .string()
    .required(VALIDATION_TEXTS.PASSWORD_REQUIRED)
    .min(8, VALIDATION_TEXTS.PASSWORD_MIN_8)
    .matches(
      REGEX_RULES.AT_LEAST_1_LOWERCASE_LETTER,
      VALIDATION_TEXTS.PASSWORD_UPPER_AND_LOWERCASE
    )
    .matches(
      REGEX_RULES.AT_LEAST_1_UPPERCASE_LETTER,
      VALIDATION_TEXTS.PASSWORD_UPPER_AND_LOWERCASE
    )
    .matches(REGEX_RULES.AT_LEAST_1_DIGIT, VALIDATION_TEXTS.PASSWORD_1_DIGIT),

  password_confirm: yup
    .string()
    .required(VALIDATION_TEXTS.PASSWORD_REQUIRED)
    .oneOf(
      [yup.ref('password'), null],
      VALIDATION_TEXTS.PASSWORD_CONFIRM_MATCH
    ),
})

const defaultValues: DefaultValues<AuthFormFields> = {
  password: '',
  password_confirm: '',
}

const ResetPasswordPage = () => {
  const { t } = useTranslation()

  const {
    handleSubmit,
    control,
    setError,
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
      headerText={t('resetPassword')}
      descriptionText={t('resetPasswordDescription')}
      form={
        <ResetPasswordForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      }
    />
  )
}

export default ResetPasswordPage
