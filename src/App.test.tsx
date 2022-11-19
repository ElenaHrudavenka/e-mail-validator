import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders input description.', () => {
  render(<App />);
    const linkElement = screen.getByText(/Enter your e-mail:/i);
  expect(linkElement).toBeInTheDocument();
});
