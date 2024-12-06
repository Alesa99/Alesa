import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#502e8b', // Rich purple for primary actions
    },
    secondary: {
      main: '#7f489c', // Medium purple for secondary actions
    },
    background: {
      default: '#9589bf', // Light lavender for general page background
      paper: '#352469', // Dark purple for paper elements like cards
    },
    text: {
      primary: '#ffffff', // White text for contrast
    },
    common: {
      black: '#000000', // Black for other elements like borders
    },
  },
});
