import { useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainLayout } from 'components/layout';
import PageNotFound from 'pages/404';
import MainPage from 'pages/main-page';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { store } from 'store-redux/store';
import { PaletteMode, ThemeOptions } from '@mui/material';
import { componentCustom } from 'utils/mui';

export interface IAppProps {
  mode?: PaletteMode | undefined
}

const getDesignTokens = (mode: PaletteMode | undefined): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#1A94FF',
            light: '#F0F8FF'
          },
          secondary: {
            main: '#F5F5FA'
          },
          background: {
            default: '#fff',
            paper: '#fff',
          },
          text: {
            primary: '#1A94FF',
            secondary: '#808089',
            disabled: '#A6A6B0',
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#1A94FF',
            light: '#0F2237'
          },
          secondary: {
            main: '#F5F5FA'
          },
          background: {
            default: '#02162C',
            paper: '#02162C',
          },
          text: {
            primary: '#fff',
            secondary: '#1A94FF',
            disabled: '#A6A6B0',
          }
        }),
  },
  ...componentCustom
});

function App(props: IAppProps) {

  const { mode } = props

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route path='/' element={<MainPage />} />
            </Route>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

// const mapStateTo

export default App;
