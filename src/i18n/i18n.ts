import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import EN from './en.json'
import HE from './he.json'

const resources = {
  en: {
    translation: EN
  },
  he: {
    translation: HE
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    preload: ["en"],
    resources,
    lng: i18n.language,
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
