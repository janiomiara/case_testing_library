import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'
import { ModalContext } from './context'

const Modal = () => {
  const { modal, setShowModal, filmes } = useContext(ModalContext)

  const {
    title,
    original_title,
  } = filmes



  const closeModal = (e) => {
    let result = e.includes('container')
    if (result) setShowModal(false)
  }

  return ReactDOM.createPortal(
    <>
      <ModalContext>
      {modal && (
        <>
          <S.Overlay />
          <S.Container
            className={'container'}
            onClick={(e) => closeModal(e.target.className)}
          >
            <S.Wrapper>
              <S.Header>
                <S.Close onClick={() => setShowModal(false)}>x</S.Close>
              </S.Header>
              
              <S.WrapperBody>
                <S.Informacoes>
                  <div className={'tituloPrincipal'}>{title}</div>
                  <div data-testid="titulo" className={'subTitulo'}>Titulo</div>
                </S.Informacoes>

                <S.Informacoes>
                  <div className={'titulo'}>{original_title}</div>
                  <div className={'subTitulo'}>Titulo Original</div>
                </S.Informacoes>

              </S.WrapperBody>
            </S.Wrapper>
          </S.Container>
        </>
      )}
      </ModalContext>
    </>,
    document.querySelector('#root')
  )
}

export default Modal
