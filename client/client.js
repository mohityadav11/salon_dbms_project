import React from 'react';
import ReactDOM from 'react-dom';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import MainRouter from './routers/MainRouter';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#f38181',
    },
    secondary: {
      main: '#fce38a',
    },
    tertiary: {
      main: '#95e1d3',
    },
  },
  typography: {useNextVariants: true},
});

ReactDOM.render (
  <MuiThemeProvider theme={theme}><MainRouter /></MuiThemeProvider>,
  document.getElementById ('root')
);
