import React from 'react';
import { render } from '@testing-library/react';
import TextField from 'components/generic/TextField/TextField';


describe('test TextField component', () => {
  it('renders correctly if defaultValue value is passed', () => {
    const { container } = render(<TextField defaultValue='Hristo' name="firstName" label="First name:" />);
    const input = container.querySelector('input');

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'firstName');
    expect(input).toHaveValue('Hristo');
    expect(container.querySelector('label')).toHaveTextContent('First name:')
  });

  it('renders correctly if no defaultValue attribute and no label are passed', () => {
    const { container } = render(<TextField formRegister={null} name="firstName" />);

    expect(container.querySelector('input')).toHaveValue('');
    expect(container.querySelector('label')).toBeFalsy();
  });

  it('renders correctly if no defaultValue value is passed', () => {
    const { container } = render(<TextField formRegister={null} defaultValue='' name="firstName" />);

    expect(container.querySelector('input')).toHaveValue('');
  });
});
