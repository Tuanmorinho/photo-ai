import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainLayout } from 'components/layout';
import PageNotFound from 'pages/404';
import MainPage from 'pages/main-page';
import { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState, store } from 'store-redux/store';
import { getDesignTokens } from 'utils/mui';

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
