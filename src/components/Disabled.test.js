import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Disabled from "./Disabled";

afterEach(cleanup);

it('should equal to 0', () => {
  const { getByTestId } = render(<Disabled />);
  expect(getByTestId('counter')).toHaveTextContent(0)
});

it('should be disabled', () => {
  const { getByTestId } = render(<Disabled />);
  expect(getByTestId('button-down')).toBeDisabled()
});