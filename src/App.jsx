import React from 'react';

// MUI
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import palette from './palette';

// Custom components
import Main from './components/Main/Main';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={palette}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}
