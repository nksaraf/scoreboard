import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
	    <Provider store={store}>
	      <Main />
	    </Provider>
	  );
  }
}
