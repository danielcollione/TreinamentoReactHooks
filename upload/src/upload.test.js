import React from 'react';
import { render } from '@testing-library/react';
import Upload from './upload';

test('renders learn react link', () => {
  const { getByText } = render(<Upload />);
  const linkElement = getByText("Upload de imagens");
  expect(linkElement).toBeInTheDocument();
});
