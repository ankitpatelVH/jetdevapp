import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { RootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
