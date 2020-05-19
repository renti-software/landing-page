import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders renti link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/renti/i);
  expect(linkElement).toBeInTheDocument();
});
