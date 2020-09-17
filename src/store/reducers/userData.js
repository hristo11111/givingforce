import { createReducer } from '@reduxjs/toolkit';
import { setUserData } from 'store/actions';

const userData = createReducer({}, {
  [setUserData]: (state, { payload }) => ({ ...state, ...payload })
});

export default userData;
