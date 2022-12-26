import { Alert } from 'react-native';
import { userSaveReducerState } from './interface';

import types from './types';

const initialState = {
  userData: [],
};

const userSaveDetails = (state: userSaveReducerState = initialState, action: any) => {
  switch (action.type) {
    case types.saveDetailsSuccessful:
      return {
        ...state,
        userData: [...state.userData, action.payload.data],
      };

    case types.removeDetails:
      state.userData?.splice(action.payload?.index, 1);
      return {
        ...state,
        userData: state.userData
      }


    default:
      return state;
  }
};

export default userSaveDetails;
