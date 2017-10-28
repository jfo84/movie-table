import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cyan500 } from 'material-ui/styles/colors';

import App from './components/App';
import reducer from './reducer';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500
  },
  appBar: {
    height: 50
  }
});

export const store = createStore(reducer);

export default render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
