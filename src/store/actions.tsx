import { createAction } from '@reduxjs/toolkit';

export const setUserData = createAction<object>('userData/set');
