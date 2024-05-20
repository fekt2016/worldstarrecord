import styled from 'styled-components'
import Section from '../../ui/Section'

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`
function EventVideo() {
  return (
    <Section type="video">
      <Header>
        <h2>Adonko 2Fingers Bosoe Conert 2020 </h2>
      </Header>

      <iframe
        src="https://www.youtube.com/embed/tRmqK1lW_k4"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
      ></iframe>
    </Section>
  )
}

export default EventVideo
