import { createReducer } from '@reduxjs/toolkit';
import { setUserData } from 'store/actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

const userData = createReducer(initialState, builder => 
  builder.addCase(setUserData, (state, { payload }) => ({ ...state, ...payload }))
);

export default userData;
