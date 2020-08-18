import React, {createContext, useContext, useEffect, useRef, useState} from "react"

export const CounterContext = createContext(null)

const ContextRef = () => {
  const ref = useRef(null)
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  
  return (
	  <CounterContext.Provider value={{ counter, increment, decrement, ref}}>
		<CounterRef/>
	  </CounterContext.Provider>
  )
}

export const CounterRef = () => {
  const { counter, increment, decrement } = useContext(CounterContext)
  const [dados, setDados] = useState([])
  
  useEffect(() => {
	let i = 0;
	let t = []
	for (; i < 150; i++) {
	  t.push({ano: `201${i}`})
	}
	setDados(t)
  },[])

  
  return (
	  <>
		<h1 data-testid="counter">{ counter }</h1>
		<button data-testid="button-up" onClick={increment}> Up</button>
		<button data-testid="button-down" onClick={decrement}>Down</button>
		
		<ul>
		{dados.map((item) => {
		  return(
			  <li key={item.ano} data-testid="container">{item.ano}</li>
		  )
		})}
		</ul>
	  </>
  )
}

export default ContextRef