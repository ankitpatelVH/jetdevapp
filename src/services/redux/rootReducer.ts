import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import userSaveDetails from './saveDetails/reducer';

export const RootReducer = combineReducers({
  userReducer: userReducer,
  userSaveDetails: userSaveDetails
});

export type RootState = ReturnType<typeof RootReducer>;
