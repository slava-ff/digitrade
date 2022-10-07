import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationsEN from './en.json'

// first setting:
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

const loadPath = `http://127.0.0.1:8080/api/translations/{{lng}}/{{ns}}`

const resources = {
  en: {
    translation: translationsEN,
  },
}

// working setting:
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    preload: ['en'],
    resources,
    lng: i18n.language,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  })

// backend setting:
// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     preload: ["language"],
//     lng: i18n.language,
//     interpolation: {
//       escapeValue: false,
//     },
//     react: {
//       useSuspense: true,
//     },

//     fallbackLng: "en",
//     ns: ["default"],
//     defaultNS: "default",
//     supportedLngs: ["en","he"],
//     backend: {
//       loadPath: loadPath
//     },
//   })

export default i18n
