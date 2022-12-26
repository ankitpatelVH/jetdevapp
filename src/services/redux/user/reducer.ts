import { userReducerState } from './interface';

import types from './types';

const initialState = {
  userData: undefined,
  info: undefined,
  isLogin: false,
};

const userReducer = (state: userReducerState = initialState, action: any) => {
  switch (action.type) {
    case types.fetchDetailsSuccessful:
      return {
        ...state,
        userData: action.payload?.results,
        info: action.payload?.info,
        isLogin: true,
      };
    case types.fetchDetailFailed:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
