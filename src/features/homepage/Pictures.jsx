import styled from 'styled-components'
import Section from '../../ui/Section'
import YouTube from 'react-youtube'

const PicContainer = styled.div`
  background-color: red;
  /* height: 50rem; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
`
const One = styled.div`
  grid-row: 1/3;
  background-image: url('../../../public/world14.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Two = styled.div`
  /* background-color: white; */
`
const Three = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  background-image: url('../../../public/world2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Four = styled.div`
  background-image: url('../../../public/world3.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Five = styled.div`
  background-color: orangered;
  grid-column: 3/4;
`
const Six = styled.div`
  grid-column: 4/5;
  grid-row: 1/3;

  background-image: url('../../../public/world5.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
function Pictures() {
  return (
    <Section>
      <PicContainer>
        <One></One>
        <Two>
          <iframe
            src="https://www.youtube.com/embed/tRmqK1lW_k4"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          ></iframe>
        </Two>
        <Three></Three>
        <Four></Four>
        <Five>
          <iframe
            src="https://www.youtube.com/embed/0OPvePI_P4I"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          ></iframe>
        </Five>
        <Six>6</Six>
      </PicContainer>
    </Section>
  )
}

export default Pictures
