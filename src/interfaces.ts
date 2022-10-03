import { Theme, ThemeOptions } from '@mui/material/styles'

export type Children = {
  children: React.ReactNode
}

export interface IToken {
  access_token: string
  refresh_token: string
}

export interface ILoginInput {
  email: string
  password: string
}

export interface ICustomTheme extends Theme {
  // status: {
  //   danger: string
  // }
}
// allow configuration using `createTheme`
export interface ICustomThemeOptions extends ThemeOptions {
  // status?: {
  //   danger?: string
  // }
}
