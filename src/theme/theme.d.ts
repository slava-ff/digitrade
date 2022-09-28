import { ICustomTheme, ICustomThemeOptions } from '../utils/interfaces'

declare module '@mui/material/styles' {
  export function createTheme(options?: ICustomThemeOptions): ICustomTheme
}
