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

  it('renders correctly if userData is empty', () => {
    const { container } = render(<Step2 userData={{}} setUserData={setUserData} history={historyMock}  />);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.firstChild.querySelectorAll('.field').length).toEqual(1);
  });

  it('renders correctly if userData is not empty. "Back" button should be shown', () => {
    const { container } = render(<Step2 userData={{ email: 'hristo.brat@yahoo.com' }} setUserData={setUserData} history={historyMock}  />);

    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.firstChild.querySelectorAll('.field').length).toEqual(1);
    expect(container.firstChild.querySelectorAll('.field input')[0]).toHaveValue('hristo.brat@yahoo.com');
    expect(container.querySelector('input[type="submit"]')).toBeTruthy();
    expect(container.querySelector('input[type="button"]')).toBeTruthy();
  });

  it('Submit button should redirect to "/thankyou". Back button should', async () => {
    const { container } = render(<Step2 userData={{}} setUserData={setUserData} history={historyMock}  />);

    await act(async () => {
      fireEvent.submit(container.querySelector('form'));
    })
    
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push.mock.calls[0][0]).toEqual('./thankyou');
  });

  it('Submit button should redirect to "/step1" when "Back" button is clicked', async () => {
    const { container } = render(<Step2 userData={{}} setUserData={setUserData} history={historyMock}  />);

    await act(async () => {
      fireEvent.click(container.querySelector('input[type="button"]'));
    })
    
    expect(historyMock.goBack).toHaveBeenCalledTimes(1);
  });
});
