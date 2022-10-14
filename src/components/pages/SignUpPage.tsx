import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthForm } from 'interfaces'
import { SignUpForm, AuthTemplate } from 'components'
import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
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

const defaultValues: DefaultValues<AuthForm> = {
  email: '',
  password: '',
  password_confirm: '',
  agreements: false,
}

const SignUpPage = () => {
  const { t } = useTranslation()
  const fetchedLayout = useAppSelector(layoutSelector)
  const [dynamicLayout, setDynamicLayout] = useState(fetchedLayout)

  useEffect(() => {
    if (fetchedLayout) {
      setDynamicLayout(fetchedLayout)
    }
  }, [fetchedLayout])

  const isImageLeftAligned =
    dynamicLayout?.layout?.loginPage.isSideImage &&
    dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const isImageRightAligned =
    dynamicLayout?.layout?.loginPage.isSideImage &&
    !dynamicLayout?.layout?.loginPage.alignmentToTheLeft
  const sideImageLink = dynamicLayout?.layout?.loginPage.sideImageLink
  const logoLink = dynamicLayout?.layout?.loginPage.logoLink

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<AuthForm>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  // TO-DO: post login data
  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    console.log('onSubmit:', data)
    // TO-DO: set errors from BE here
    setError('email', {
      type: 'manual',
      message: 'Dont Forget Your Username Should Be Cool!',
    })
  }

  return (
    <AuthTemplate
      logoLink={logoLink}
      sideImageLink={sideImageLink}
      isImageLeftAligned={isImageLeftAligned}
      isImageRightAligned={isImageRightAligned}
      headerText={t('signUp')}
      descriptionText={t('signUpDescription')}
      form={
        <SignUpForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      }
    />
  )
}

export default SignUpPage
