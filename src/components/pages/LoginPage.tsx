import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AuthForm } from 'interfaces'
import { LoginForm, AuthTemplate } from 'components'
import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { VALIDATION_TEXTS } from 'utils/constants'

const schema = yup.object({
  email: yup
    .string()
    .required(VALIDATION_TEXTS.EMAIL_REQUIRED)
    .email(VALIDATION_TEXTS.EMAIL_VALID),

  password: yup.string().required(VALIDATION_TEXTS.PASSWORD_REQUIRED),
})

const defaultValues: DefaultValues<AuthForm> = {
  email: '',
  password: '',
}

const LoginPage = () => {
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
    formState: { errors },
  } = useForm<AuthForm>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  // TO-DO: post login data
  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    console.log('onSubmit:', data)
  }

  return (
    <AuthTemplate
      logoLink={logoLink}
      sideImageLink={sideImageLink}
      isImageLeftAligned={isImageLeftAligned}
      isImageRightAligned={isImageRightAligned}
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
