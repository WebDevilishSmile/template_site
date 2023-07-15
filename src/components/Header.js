'use client';

import { theme } from '@/utilities/theme';

import {
  AppBar,
  ThemeProvider,
  Typography,
  useScrollTrigger,
} from '@mui/material';

export default function Header() {
  /* SCROLL TRIGGER SCROLLING OFF TOP OF WINDOW */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        /* HEADER CONTAINER */
        elevation={trigger ? 3 : 0}
        sx={{
          height: '10rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.secondary.light,
          gap: '5rem',
          p: '.5rem 0',
          transition: 'all .5s ease',
        }}
      >
        <Typography variant="h1">Header</Typography>
      </AppBar>
    </ThemeProvider>
  );
}
