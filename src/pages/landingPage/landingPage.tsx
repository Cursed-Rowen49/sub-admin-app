import React from 'react';

import NavSideBar from '@/components/NavigationBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function landingPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <NavSideBar />
      </div>
    </ThemeProvider>
  );
}

export default landingPage;
