import { createTheme } from '@mui/material/styles';
import { palette } from 'theme/palette';
import { typography } from 'theme/typography';
import { breakpoints } from 'theme/breakpoints';

export const baseTheme = createTheme({
  breakpoints,
  palette,
  typography,
  spacing: (factor: number) => `${factor}rem`,
});
