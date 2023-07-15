'use client';

import { theme } from '@/utilities/theme';

import { Box, ThemeProvider, Typography } from '@mui/material';

/*  */

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box /* HOME PAGE CONTAINER */
        id="home"
        sx={{
          width: '100vw',
          height: '50rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          pt: '20rem',
          backgroundColor: theme.palette.background.blue,
        }}
      >
        <Typography variant="h1">Home Page</Typography>
      </Box>
    </ThemeProvider>
  );
}
