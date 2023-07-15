'use client';

import { theme } from '@/utilities/theme';

import { AppBar, Box, ThemeProvider, Typography } from '@mui/material';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar /* FOOTER CONTAINER */
        position="fixed"
        sx={{
          height: '10rem',
          top: 'auto',
          bottom: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000',
          backgroundColor: theme.palette.primary.light,
          gap: '1.5rem',
          p: '.5rem 0',
          transition: 'all .5s ease',
        }}
      >
        <Box sx={{ width: '20%' }}>
          <Typography textAlign="center">Site description</Typography>
        </Box>
        <Typography variant="h1">Footer</Typography>
        <Box sx={{ width: '20%' }}>
          <Typography textAlign="center">
            This site was designed and developed by &copy; Tiago Davila 2023
          </Typography>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
