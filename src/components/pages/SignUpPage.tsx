import { useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthFormFields } from 'interfaces'
import { SignUpForm, AuthTemplate } from 'components'
import { REGEX_RULES, VALIDATION_TEXTS } from 'utils/constants'

const schema = yup.object({
  email: yup
    .string()
    .required(VALIDATION_TEXTS.EMAIL_REQUIRED)
    .email(VALIDATION_TEXTS.EMAIL_VALID),

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

  agreements: yup.boolean().oneOf([true], VALIDATION_TEXTS.AGREEMENTS_REQUIRED),
})

const defaultValues: DefaultValues<AuthFormFields> = {
  email: '',
  password: '',
  password_confirm: '',
  agreements: false,
}

const SignUpPage = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<AuthFormFields>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  // TO-DO: post signup data
  const onSubmit: SubmitHandler<AuthFormFields> = (data) => {
    setLoading(true)
    console.log('onSubmit:', data)
    setLoading(false)
    // TO-DO: set errors from BE here
    setError('email', {
      type: 'manual',
      message: 'Dont Forget Your Username Should Be Cool!',
    })
  }

  return (
    <AuthTemplate
      headerText={t('signUp')}
      descriptionText={t('signUpDescription')}
      form={
        <SignUpForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
        />
      }
    />
  )
}

export default SignUpPage
