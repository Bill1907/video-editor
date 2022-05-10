import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('start App', () => {
  render(<App />);
  const comment = screen.getByText(/자 이제 시작이다/i);
  expect(comment).toBeInTheDocument();
});
