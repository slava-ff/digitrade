import { TFunction } from 'react-i18next'

export const errorI18nKeyParser = (key: string | undefined, t: TFunction) => {
  if (!key) return

  const translation = t(key)

  if (translation === key) {
    return key
  } else {
    return translation
  }
}

export const isRequiredFromSchema = (schema: any, fieldName: string) => {
  return schema.fields[fieldName]._exclusive.required || false
}
