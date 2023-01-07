import { ThemeOptions, PaletteMode } from "@mui/material";

export const componentCustom = (colorMode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      },
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1148px',

          '@media (min-width: 1200px)': {
            maxWidth: '1148px'
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: 'white',
          cursor: 'pointer',
          background: 'transparent',
          // '&:hover': {
          //   background: '#c2af94'
          // },

          // '&.active': {
          //   background: '#ac9c84'
          // }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colorMode === 'dark' ? 'white' : 'primary.main',
          borderRadius: '200px',
          textTransform: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white',
          fontSize: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }
        }
      }
    }
  }
});

export const getDesignTokens = (mode: PaletteMode | 'light'): ThemeOptions => ({
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
            primary: '#38383D',
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
  ...componentCustom(mode)
});