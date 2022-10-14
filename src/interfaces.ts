import { SubmitHandler, Control, UseFormHandleSubmit } from 'react-hook-form'
import { Theme, ThemeOptions } from '@mui/material/styles'
import { SxProps } from '@mui/material'

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

export type AuthFormFields = EmailForm & PasswordForm & AgreementsForm

export type AuthForm = {
  control: Control<AuthFormFields>
  handleSubmit: UseFormHandleSubmit<AuthFormFields>
  onSubmit: SubmitHandler<AuthFormFields>
  sx?: SxProps<CustomTheme> | undefined
}

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
