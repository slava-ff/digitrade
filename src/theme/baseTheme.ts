import { createTheme } from '@mui/material/styles';
import { palette } from 'theme/palette';
import { typography } from 'theme/typography';

export const baseTheme = createTheme({
  palette,
  typography,
  spacing: (factor: number) => `${factor}rem`,
});
