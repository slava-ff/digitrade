import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, DefaultValues } from 'react-hook-form'

import { AuthForm } from 'interfaces'
import { SignUpForm, AuthTemplate } from 'components'
import { layoutSelector } from 'slices'
import { useAppSelector } from 'hooks/reduxToolkitHooks'
import { useTranslation } from 'react-i18next'

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
    formState: { errors },
  } = useForm<AuthForm>({
    defaultValues,
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
