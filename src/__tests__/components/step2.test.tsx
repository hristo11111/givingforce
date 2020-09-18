import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Step2 from 'components/UserData/Step2';
import 'mutationobserver-shim';


describe('test Step2 component', () => {
  const historyMock = { 
    push: jest.fn(),
    goBack: jest.fn()
  };
  const setUserData = jest.fn();
  const initialUserData = {
    firstName: '',
    lastName: '',
    email: ''
  };

  it('renders correctly if userData is empty', () => {
    // @ts-ignore
    const { container } = render(<Step2 userData={initialUserData} setUserData={setUserData} history={historyMock} />);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.querySelectorAll('.field').length).toEqual(1);
  });

  it('renders correctly if userData is not empty. "Back" button should be shown', () => {
    // @ts-ignore
    const { container } = render(<Step2 userData={{ email: 'hristo.brat@yahoo.com', firstName: '', lastName: '' }} setUserData={setUserData} history={historyMock} />);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.querySelectorAll('.field').length).toEqual(1);
    expect(container.querySelectorAll('.field input')[0]).toHaveValue('hristo.brat@yahoo.com');
    expect(container.querySelector('input[type="submit"]')).toBeTruthy();
    expect(container.querySelector('input[type="button"]')).toBeTruthy();
  });

  it('Submit button should redirect to "/thankyou". Back button should', async () => {
    // @ts-ignore
    const { container } = render(<Step2 userData={initialUserData} setUserData={setUserData} history={historyMock} />);

    await act(async () => {
      const form = container.querySelector('form') as HTMLFormElement;
      fireEvent.submit(form);
    })
    
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push.mock.calls[0][0]).toEqual('./thankyou');
  });

  it('Submit button should redirect to "/step1" when "Back" button is clicked', async () => {
    // @ts-ignore
    const { container } = render(<Step2 userData={initialUserData} setUserData={setUserData} history={historyMock} />);

    await act(async () => {
      const button = container.querySelector('input[type="button"]') as HTMLFormElement;
      fireEvent.click(button);
    })
    
    expect(historyMock.goBack).toHaveBeenCalledTimes(1);
  });
});
