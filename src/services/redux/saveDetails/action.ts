import types from './types';

const saveDetailsSuccess = (payload: any) => ({
  type: types.saveDetailsSuccessful,
  payload,
});

const removeDetailsSuccess = (payload: any) => ({
  type: types.removeDetails,
  payload,
});

export { saveDetailsSuccess, removeDetailsSuccess };
