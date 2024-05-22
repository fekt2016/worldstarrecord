import styled from 'styled-components'
import Section from '../../ui/Section'
import { devicesMax } from '../../styles/BreakPoint'

const PicContainer = styled.div`
  /* height: 100rem; */
  padding: 4rem;
  display: flex;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${devicesMax.md} {
    flex-basis: 100rem;
  }
`
const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  @media ${devicesMax.md} {
    flex-basis: 100rem;
  }
`
const One = styled.div`
  flex: 1;
  background-image: url('../../../world14.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid var(--color-grey-100);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  flex-basis: 40rem;
`
const Two = styled.div`
  border: 1rem solid var(--color-grey-100);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  flex: 1;
  flex-basis: 40rem;
`
const Three = styled.div`
  background-image: url('../../../world2.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1rem solid var(--color-grey-100);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  flex: 1;
  flex-basis: 40rem;
`
const Four = styled.div`
  border: 1rem solid var(--color-grey-100);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 1rem;
  flex: 1;
  flex-basis: 40rem;
`

function Pictures() {
  return (
    <Section>
      <PicContainer>
        <Left>
          <Two>
            <iframe
              src="https://www.youtube.com/embed/tRmqK1lW_k4"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            ></iframe>
          </Two>
          <One></One>
        </Left>
        <Right>
          <Three></Three>
          <Four>
            <iframe
              src="https://www.youtube.com/embed/0OPvePI_P4I"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            ></iframe>
          </Four>
        </Right>
      </PicContainer>
    </Section>
  )
}

export default Pictures
