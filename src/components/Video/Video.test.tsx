import React from 'react';
import { render, screen } from '@testing-library/react';
import Video from './Video';

test('start App', () => {
  render(<Video />);
  const comment = screen.getByText(/자 이제 시작이다/i);
  expect(comment).toBeInTheDocument();
});
