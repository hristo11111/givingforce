import reducer from 'store/reducers/userData';
import { setUserData } from 'store/actions';

describe('userData reducer', () => {
  it('should return new state when "userData/set" action is called and payload is not empty', () => {
    const initialState = { firstName: '', 'lastName': '', email: '' };
    const data = { firstName: 'Hristo', 'lastName': 'Bratanov' };
    const action = {
      payload: data,
      type: setUserData,
    };

    expect(reducer(initialState, action)).toEqual(data);
  });

  it('should return modify the state when "userData/set" action is called and payload is not empty', () => {
    const initialState = { firstName: 'Hristo', 'lastName': 'Bratanov', email: 'hristo_br@yahoo.com' };
    const data = { firstName: 'Maya' };
    const expected = { firstName: 'Maya', 'lastName': 'Bratanov', email: 'hristo_br@yahoo.com' };
    const action = {
      payload: data,
      type: setUserData,
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
