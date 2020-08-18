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
	const {getAllByTestId} = renderWithContext(<CounterRef/>)
	const Names = getAllByTestId('container').map((li => li.textContent))
	const dados = fakerArray().map(c => c.ano)
	expect(Names).toEqual(dados)
	
  });
})
