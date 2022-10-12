import { CustomTheme, CustomThemeOptions } from '../interfaces'

declare module '@mui/material/styles' {
  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
