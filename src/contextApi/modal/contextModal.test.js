import React, {useContext} from 'react'
import {render, cleanup,} from '@testing-library/react'
import  {Modal, ModalContext} from "./context";


afterEach(cleanup);

it('checks if initial state is equal to 0', async  () => {
  const openModal = jest.fn()
  const closeModal =  jest.fn()
  const modal = true
  const filme = {
	nome: 'janio',
	ano: '2000'}
  const {container, getByTestId, }= render(
	  <ModalContext.Provider value={{modal,  openModal, closeModal, filme }}>
		  <Modal/>
	  </ModalContext.Provider>,
	  { container: document.body },
  )
  expect(getByTestId('modal')).toHaveTextContent('modal')
})
