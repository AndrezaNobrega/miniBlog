import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('matches snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
