import React, {createContext, useContext, useState} from "react"
import * as S from "./styles";
import ReactDOM from 'react-dom'

export const ModalContext = createContext(null)

const ContextModal = () => {
  const [modal, setModal] = useState(false)
  const [filme, setFilme] = useState({})
  
  const openModal = () => setModal(true)
  const closeModal = () => setModal(false)
  
  return (
      <ModalContext.Provider value={{modal, openModal, closeModal, filme}}>
        <Modal />
      </ModalContext.Provider>
  )
}

export const Modal = () => {
  const { modal, openModal, closeModal, filme } = useContext(ModalContext)
  return ReactDOM.createPortal (
      <>
        {modal && (
        <>
          <S.Overlay/>
          <S.Container data-testid="open_modal"
              onClick={() => openModal()}>
            <S.Wrapper>
              <S.Header>
                <S.Close  data-testid="close_modal" onClick={closeModal}>x</S.Close>
              </S.Header>
        
              <S.WrapperBody>
                <S.Informacoes>
                  <div className={'tituloPrincipal'}>{filme.nome}</div>
                  <div data-testid="titulo" className={'subTitulo'}>Titulo</div>
                </S.Informacoes>
                {modal && <div data-testid="modal">modal</div>}
                <S.Informacoes>
                  <div className={'titulo'}>{filme.ano}</div>
                  <div className={'subTitulo'}>Titulo Original</div>
                </S.Informacoes>
        
              </S.WrapperBody>
            </S.Wrapper>
          </S.Container>
        </>
        )}
      </>,
      document.querySelector('body')
  )
}

export default ContextModal