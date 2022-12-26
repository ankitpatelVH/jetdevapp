/**
 * @method {LogBox.ignoreAllLogs() is for remove unnecessary error
 */

import React from 'react';
import { LogBox } from 'react-native';
import Route from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/services/redux/store';

LogBox.ignoreAllLogs();
const App = () => {
  const persistStore = store();
  return (
    <SafeAreaProvider>
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <Route />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
};

export default App;

