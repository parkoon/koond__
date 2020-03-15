import styled from 'styled-components'
import palette from '../../../../themes/palette'

export const ModalWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: 0.3s;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')};
`
export const Modal = styled.div`
  position: relative;
  padding: 30px;
  max-width: 300px;
  background: ${palette.white};
  border-radius: 15px;
  box-sizing: border-box;
`

export const ModalBody = styled.div``

export const ModalFooter = styled.div`
  display: flex;
  margin-top: 24px;

  & > * {
    flex: 1;
    margin-right: 7px;
    text-align: right;
    justify-content: center;
  }

  & > *:last-child {
    margin-right: 0px;
  }
`

export const ModalClose = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  color: ${palette.grayscale[2]};
  /* border-radius: 50%; */

  transition: 0.3s;

  &:hover {
    /* background: rgba(0, 0, 0, 0.05); */
    color: ${palette.grayscale[0]};
  }
`
