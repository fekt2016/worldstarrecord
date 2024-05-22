import styled from 'styled-components'
import Modal from '../ui/Modal'
// import { createPortal } from 'react-dom'
import { useState } from 'react'
import { devicesMax } from '../styles/BreakPoint'

const images = [
  {
    id: 1,
    src: '../../image1.png',
    msg: 'concert 2024',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 2,
    src: '../../image2.png',
    msg: 'concert 2022',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 3,
    src: '../../image3.png',
    msg: 'concert 2023',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 4,
    src: '../../image4.png',
    msg: 'concert 2020',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 5,
    src: '../../image5.png',
    msg: 'concert 2021',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 6,
    src: '../../image6.png',
    msg: 'concert 2022',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 7,
    src: '../../image7.png',
    msg: 'concert 2020',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 8,
    src: '../../image8.png',
    msg: 'concert 2022',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 9,
    src: '../../image9.png',
    msg: 'concert 2023',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 10,
    src: '../../image10.png',
    msg: 'concert 2024 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 11,
    src: '../../image11.png',
    msg: 'concert 2021 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 12,
    src: '../../image12.png',
    msg: 'concert 2020 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 13,
    src: '../../image13.png',
    msg: 'concert 2023 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 14,
    src: '../../image14.png',
    msg: 'concert 2021 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 15,
    src: '../../image15.jpg',
    msg: 'concert 2022 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 16,
    src: '../../image16.jpg',
    msg: 'concert 2024 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 17,
    src: '../../image17.jpg',
    msg: 'concert 2024 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 18,
    src: '../../image18.jpg',
    msg: 'concert 2023 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 19,
    src: '../../world9.jpeg',
    msg: 'concert 2020 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 20,
    src: '../../world8.jpeg',
    msg: 'concert 2021 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 21,
    src: '../../world7.jpeg',
    msg: 'concert 2012',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 22,
    src: '../../world6.jpeg',
    msg: 'concert 2020 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 23,
    src: '../../world5.jpeg',
    msg: 'concert 2020',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 24,
    src: '../../world4.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 25,
    src: '../../world3.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },

  {
    id: 27,
    src: '../../world2.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 28,
    src: '../../world14.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 29,
    src: '../../world13.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020',
  },
  {
    id: 30,
    src: '../../world12.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 31,
    src: '../../world11.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
  {
    id: 32,
    src: '../../world10.jpeg',
    msg: 'concert 2012 ',
    msgs: 'adonko concert photos 2020 ',
  },
]
const Container = styled.div`
  margin: auto;
`
const PhotoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin: 10rem;
  @media ${devicesMax.md} {
    margin: 8rem;
  }
  @media ${devicesMax.sm} {
    margin: 2rem;
  }
`
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  cursor: pointer;
`
const Img = styled.img`
  border-radius: 7px;
  width: 100%;
  flex: 1;
`
const P = styled.p`
  font-size: 1.6rem;
  padding-left: 2rem;
  color: var(--color-grey-400);
  text-transform: capitalize;
`

function Gallery() {
  const [showIsModal, setShowIsModal] = useState(false)
  const [imageId, setImageId] = useState(null)
  // function modalHandler() {
  //   setShowIsModal(true)
  // }

  return (
    <Container>
      {showIsModal && (
        <Modal
          setShowIsModal={setShowIsModal}
          imageId={imageId}
          images={images}
          showIsModal={showIsModal}
        />
      )}
      <h1> photos gallery</h1>
      <PhotoBox>
        {images.map((image) => {
          return (
            <ImgBox
              onClick={() => {
                setShowIsModal(true)
                setImageId(image.id)
              }}
              key={image.id}
            >
              <Img src={image.src} />
              <P>{image.msg}</P>
            </ImgBox>
          )
        })}
      </PhotoBox>
    </Container>
  )
}

export default Gallery
