import styled from 'styled-components'
import Section from '../../ui/Section'

const PicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  padding: 2rem;
`
const One = styled.div`
  grid-row: 1/3;
  background-image: url('../../../world14.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
`
const Two = styled.div`
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
`
const Three = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  background-image: url('../../../world2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
`
const Four = styled.div`
  background-image: url('../../../world3.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
`
const Five = styled.div`
  grid-column: 3/4;
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
`
const Six = styled.div`
  grid-column: 4/5;
  grid-row: 1/3;

  background-image: url('../../../world5.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
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
        <Six></Six>
      </PicContainer>
    </Section>
  )
}

export default Pictures
