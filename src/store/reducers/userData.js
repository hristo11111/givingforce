import { createReducer } from '@reduxjs/toolkit';
import { setUserData } from '../actions';

const userData = createReducer({}, {
  [setUserData]: (state, { payload }) => ({ ...state, ...payload })
});

export default userData;
