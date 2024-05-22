/* eslint react/prop-types: 0 */
import styled, { css } from 'styled-components'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { devicesMax } from '../styles/BreakPoint'

// const fadeIn = keyframes`
//   from { opacity: 0}
//   to {opacity: 1}
// `
// const fadeOut = keyframes`
//   from { opacity: 1}
//   to {opacity: 0}
// `

const Icon = css`
  font-size: 5rem;
  fill: var(--color-grey-200);
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 50%;
`

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--color-white-100);
  height: 100%;
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease-in-out;
  /* opacity: 0; */
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  z-index: 1000;
  transition: opacity 1s ease-in-out;
`
const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: transparent;
`
const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
  padding: 0 1rem;
`
const Img = styled.img`
  height: 50rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media ${devicesMax.sm} {
    height: 38rem;
  }
`
const ArrowLeft = styled(FaArrowAltCircleLeft)`
  ${Icon}
  left: 10%;
  @media ${devicesMax.sm} {
    left: 2%;
  }
`

const ArrowRight = styled(FaArrowAltCircleRight)`
  ${Icon}
  right: 10%;
  @media ${devicesMax.sm} {
    right: 2%;
  }
`
const CloseIcon = styled(IoIosCloseCircleOutline)`
  font-size: 3rem;
  fill: var(--color-white-100);
`
const P = styled.p`
  color: var(--color-grey-400);
  text-transform: capitalize;
`
const H2 = styled.h2`
  text-transform: uppercase;
  /* color: var(--color-grey-400); */
  margin-bottom: 2rem;
`
function Modal({ setShowIsModal, imageId, images }) {
  const [nextPic, setNextPic] = useState(imageId)
  const currentImageNum = images[nextPic].src
  return createPortal(
    <Overlay>
      <Button>
        <CloseIcon
          onClick={() => {
            setShowIsModal(false)
          }}
        />
      </Button>
      <StyledModal>
        <H2>{images[nextPic].msgs}</H2>
        <ImgBox>
          <ArrowLeft
            onClick={() => {
              if (nextPic === 0) return setNextPic(images.length - 1)
              setNextPic((prev) => prev - 1)
            }}
          />
          <Img src={currentImageNum} alt={`concert photos-${imageId}`} />
          <ArrowRight
            onClick={() => {
              if (nextPic === images.length - 1) return setNextPic(1)
              setNextPic((prev) => prev + 1)
            }}
          />
        </ImgBox>
        <div>
          <P>{images[nextPic].msg}</P>
        </div>
      </StyledModal>
    </Overlay>,
    document.body,
  )
}

export default Modal
