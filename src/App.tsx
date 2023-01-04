import { PaletteMode, ThemeOptions } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainLayout } from 'components/layout';
import PageNotFound from 'pages/404';
import MainPage from 'pages/main-page';
import { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState, store } from 'store-redux/store';
import { componentCustom } from 'utils/mui';

const getDesignTokens = (mode: PaletteMode | 'light'): ThemeOptions => ({
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

function App() {

  const colorMode: PaletteMode = useSelector((state: RootState) => state.colorMode.mode)

  const theme = useMemo(() => createTheme(getDesignTokens(colorMode)), [colorMode]);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route path='/' element={<MainPage />} />
            </Route>
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
