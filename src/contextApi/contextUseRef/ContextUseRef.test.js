import React from 'react'
import {render, cleanup,  act} from '@testing-library/react'
import CounterProvider, { CounterContext, CounterRef } from './ContextUseRef'

const fakerArray = () => {
  let i = 0
  let t = []
  for (; i < 150; i++) {
	t.push({ano: `201${i}`})
  }
  return t
}

const renderWithContext = (component) => {
  return {
	...render(
		<CounterProvider value={CounterContext}>
		  {component}
		</CounterProvider>
	)
  }}

afterEach(cleanup);

it('checks if initial state is equal to 0', async  () => {
  const dados = renderWithContext(<CounterRef/>)
  expect(dados.getByTestId('counter')).toHaveTextContent('0')

  await act(async () => {
  
	const r = render(
		<CounterProvider>
		  <CounterRef/>
		</CounterProvider>
	)
	const Namess = r.getAllByTestId('container')
	expect(Namess.length).toBe(150);
	expect(r.getByText('2010')).toBeTruthy();
	expect(r.queryByText('2011')).toBeTruthy();
	expect(r.queryByText('Some Name')).toBe(null);
	const Names = r.getAllByTestId('container').map((li => li.textContent))
	const dados = fakerArray().map(c => c.ano)
	expect(Names).toEqual(dados)
	
  });
})
