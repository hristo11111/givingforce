import { createReducer } from '@reduxjs/toolkit';
import { setUserData } from '../actions';

const userData = createReducer({}, {
  [setUserData]: (state, { payload }) => {
    console.log(payload);
    return { ...state, ...payload };
  }
});

export default userData;
