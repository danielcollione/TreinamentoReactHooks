import React from 'react';
import { render } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

test('renders learn react link', () => {
  const { getByText } = render(<MiniEcommerce />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
