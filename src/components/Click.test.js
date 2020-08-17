import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import Click from "./Click";


it('increments counter', () => {
  const { getByTestId } = render(<Click />);
  
  fireEvent.click(getByTestId('button-up'))
  
  expect(getByTestId('counter')).toHaveTextContent('1')
});

it('decrement counter', () => {
  const { getByTestId } = render(<Click />);
  
  fireEvent.click(getByTestId('button-down'))
  
  expect(getByTestId('counter')).toHaveTextContent('-1')
});
