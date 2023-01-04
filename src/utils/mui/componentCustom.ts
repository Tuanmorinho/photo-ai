import { ThemeOptions } from "@mui/material";

export const componentCustom: ThemeOptions = {
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
          color: 'white',
          borderRadius: '200px',
          textTransform: 'none',
          boxShadow: 'none'
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
    }
  }
};
