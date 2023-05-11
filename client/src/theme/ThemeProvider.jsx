import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const spacer = 4;

const theme = {
  palette: {
    default: {
      light: '#FFF',
      dark: '#222',
    },
    primary: {
      light: '#B7FF6F',
      main: '#A5FF4B',
      dark: '#95FF2A',
    },
    warning: {
      light: '#F9D379',
      main: '#F7C857',
      dark: '#F5BE37',
    },
    danger: {
      light: '#FF6262',
      main: '#FF3B3B',
      dark: '#FF1C1C',
    },
    background: {
      light: {
        primary: '#EDEDED',
        secondary: '#DDDDDD'
      },
      dark: {
        primary: '#3F3F3F',
        secondary: '#323232'
      }
    }
  },
  typography: {
    h1: {
      mobile: '40px',
      desktop: '50px'
    },
    h2: {
      mobile: '30px',
      desktop: '38px'
    },
    h3: {
      mobile: '24px',
      desktop: '28px'
    },
    h4: {
      mobile: {
        fontSize: '20px',
        lineHeight: '24px',
      },
      desktop: {
        fontSize: '22px',
        lineHeight: '26.4px',
      },
    },
    body: {
      fontSize: '16px',
      lineHeight: '22.4px',
    },
    legal: {
      mobile: {
        fontSize: '12px',
        lineHeight: '16.8px',
      },
      desktop: {
        fontSize: '14px',
        lineHeight: '19.6px',
      },
    },
  },
  spacer: spacer,
  size: [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].reduce((prevObj, size) => ({
    ...prevObj,
    [size]: `${size * spacer}px`,
  }), {}),
};

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
