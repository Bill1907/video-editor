import React from 'react';
import { render, screen } from '@testing-library/react';
import Video from './Video';

const videoJsOptions = {
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};
// 1. video element가 있는지 확인
// 2. video 플레이가 잘되는지 확인
test('start App', () => {
  render(<Video options={videoJsOptions}/>);
  const video = screen.getByTestId('player');
  expect(video).toBeInTheDocument();
});
