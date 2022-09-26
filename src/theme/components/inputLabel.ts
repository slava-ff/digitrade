import { colors } from 'theme/palette/colors';

export default {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: 12,
        fontWeight: 700,
        transform: "none",
        position: "relative",
        marginBottom: 4,
        color: colors.grey[600],
        "&.Mui-focused": {
          color: colors.grey[600],
        }
      },
    },
  },
};
