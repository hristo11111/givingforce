import React from 'react';
import { render } from '@testing-library/react';
import Form from 'components/generic/Form/Form';


describe('test Form component', () => {
  it('renders correctly if children are passed', () => {
    const { container } = render(<Form><input type='text' /></Form>);
    
    expect(container.querySelector('input')).toBeTruthy();
  });
});
