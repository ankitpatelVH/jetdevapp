import types from './types';

const fetchDetailsSuccess = (payload: any) => ({
  type: types.fetchDetailsSuccessful,
  payload,
});

const fetchDetailsFail = (payload: any) => ({
  type: types.fetchDetailFailed,
  payload,
});


export { fetchDetailsSuccess, fetchDetailsFail };
