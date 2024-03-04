import React from 'react';
import './src/locales/i18n';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import ApplicationWrapper from './src/wrapper/ApplicationWrapper';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ApplicationWrapper />
    </Provider>
  );
}

export default App;
