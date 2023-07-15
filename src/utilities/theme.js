import { createTheme, responsiveFontSizes } from '@mui/material';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export let theme = createTheme({
  palette: {
    primary: {
      light: '#999fff',
      main: '#000fff',
    },
    secondary: {
      light: '#ee9999',
      main: '#d40000',
    },
    background: {
      darkblue: '#000119',
      blue: '#e6e7ff',
      darkred: '#150000',
      red: '#fbe6e6',
    },
    text: {
      lightblue: '#e6e7ff',
      lightred: '#fbe6e6',
      darkblue: '#000119',
      darkred: '#150000',
    },
  },

  typography: {
    fontSize: 10,
    htmlFontSize: 10,
    fontFamily: [
      'Montserrat',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: { fontWeight: '300', fontSize: '5rem', textTransform: 'uppercase' },
    h2: { fontWeight: '300', fontSize: '4.25rem', textTransform: 'uppercase' },
    h3: { fontWeight: '300', fontSize: '3.5rem', textTransform: 'uppercase' },
    h4: { fontWeight: '300', fontSize: '3rem' },
    h5: { fontWeight: '300', fontSize: '2.5rem' },
    h6: { fontWeight: '300', fontSize: '2rem' },
    body1: { fontWeight: '300', fontSize: '1rem' },
    body2: { fontWeight: '300', fontSize: '1.6rem' },
    body3: { fontWeight: '300', fontSize: '1rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: 'Montserrat',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            color: '#000119',
            backgroundColor: '#ee9999',
            transition: 'all .2s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: '#e6e7ff',
              color: '#000119',
            },
            '&:active': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 #000',
            },
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 200,
      sm: 400,
      md: 600,
      lg: 800,
      xl: 1000,
      xxl: 1200,
    },
  },
});

theme = responsiveFontSizes(theme);
