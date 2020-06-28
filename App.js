import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppLayout from './src/screens';
import Loading from './src/components/Loading';
import configureStore from './src/redux/store';

const {store, persistor} = configureStore ();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
