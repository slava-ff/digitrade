// import i18n from "i18next"
// import { initReactI18next } from "react-i18next"
// import LanguageDetector from 'i18next-browser-languagedetector';

import { i18nSelector } from "app/i18nSlice"

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
  password: string
  passwordPlaceholder: string
  rememberMe: string
  forgotPassword: string
  dontHaveAccount: string
  signUp: string
  companyInfo: string
}

// const locale:Localization = {
//   loginPageFormLabel: "Войти"
// }

export const useTranslation = () => {
  const fetchedI18n = i18nSelector();

  const t = (key: keyof Localization) => fetchedI18n?.i18n?.translations[key]

  const i18n = {
    dir: () => fetchedI18n?.i18n?.isRtl ? "rtl" : "ltr"
  }

  return { t, i18n }
}
