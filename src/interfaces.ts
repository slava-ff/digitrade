import { Theme, ThemeOptions } from '@mui/material/styles'

export type Children = {
  children: React.ReactNode
}

export interface Token {
  access_token: string
  refresh_token: string
}

export type EmailForm = {
  email: string
}

export type PasswordForm = {
  password: string
  password_confirm?: string
}

export type AgreementsForm = {
  agreements?: boolean
}

export type AuthForm = EmailForm & PasswordForm & AgreementsForm

export interface CustomTheme extends Theme {
  // status: {
  //   danger: string
  // }
}
// allow configuration using `createTheme`
export interface CustomThemeOptions extends ThemeOptions {
  // status?: {
  //   danger?: string
  // }
}
