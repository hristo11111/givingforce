import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Step1 from '../../components/UserData/Step1';
import 'mutationobserver-shim';


describe('test Step1 component', () => {
  const historyMock = { 
    push: jest.fn() 
  };
  const setUserData = jest.fn();
  
  it('renders correctly if userData is empty', () => {
    const { container } = render(<Step1 userData={{}} setUserData={setUserData} history={historyMock}  />);
    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.firstChild.querySelectorAll('.field').length).toEqual(2);
  });

  it('renders correctly if userData is not empty. No "Back" button', () => {
    const { container } = render(<Step1 userData={{ firstName:'Hristo', lastName: 'Brat'}} setUserData={setUserData} history={historyMock}  />);
    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.querySelectorAll('.field').length).toEqual(2);
    expect(container.querySelectorAll('.field input')[0]).toHaveValue('Hristo');
    expect(container.querySelectorAll('.field input')[1]).toHaveValue('Brat');
    expect(container.querySelector('input[type="submit"]')).toBeTruthy();
    expect(container.querySelector('input[type="button"]')).toBeFalsy();
  });

  it('Submit button should redirect to "/step2"', async () => {
    const { container } = render(<Step1 userData={{}} setUserData={setUserData} history={historyMock}  />);

    await act(async () => {
      fireEvent.submit(container.querySelector('form'));
    })
    
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push.mock.calls[0][0]).toEqual('./step2');
  });
});
