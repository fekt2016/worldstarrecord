import styled from 'styled-components'
import Section from '../../ui/Section'
import Video from '../../ui/Video'

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
      <Video code={'tRmqK1lW_k4'} />
    </Section>
  )
}

export default EventVideo
