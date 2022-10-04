// import i18n from "i18next"
// import { initReactI18next } from "react-i18next"
// import LanguageDetector from 'i18next-browser-languagedetector';

import { useEffect } from 'react'
import { i18nSelector } from 'slices/i18nSlice'

// const resources = {
//   language: {},
//   en: {
//     translation: EN
//   },
//   he: {
//     translation: HE
//   }
// };

// i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     preload: ["language"],
//     resources,
//     lng: i18n.language,
//     fallbackLng: "en",
//     keySeparator: false,
//     interpolation: {
//       escapeValue: false,
//     },
//     react: {
//       useSuspense: true,
//     },
//   })

//   i18n.loadLanguages(locale)

// export default i18n

type Localization = {
  loading: string
  logIn: string
  loginDescription: string
  email: string
  emailAddress: string
  emailPlaceholder: string
  emailValidation: string
  password: string
  passwordPlaceholder: string
  passwordValidation: string
  rememberMe: string
  forgotPassword: string
  dontHaveAccount: string
  signUp: string
  companyInfo: string
}

export const useTranslation = () => {
  const fetchedI18n = i18nSelector()

  // TO-DO: remove and fix errors
  let t = (key: keyof Localization) => fetchedI18n.i18n.translations[key] || ''
  let i18n = {
    dir: () => (fetchedI18n.i18n.isRtl ? 'rtl' : 'ltr'),
  }

  useEffect(() => {
    t = (key: keyof Localization) => fetchedI18n.i18n.translations[key] || ''

    i18n = {
      dir: () => (fetchedI18n.i18n.isRtl ? 'rtl' : 'ltr'),
    }
  }, [fetchedI18n])

  return { t, i18n }
}
