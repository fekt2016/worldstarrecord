import styled from 'styled-components'

const EventBox = styled.div`
  padding: 8rem;

  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: space-around;
  align-items: flex-start;
`

const Img = styled.img`
  height: 70rem;
  width: 45%;
`

function Event() {
  return (
    <EventBox>
      <Img src="../../poster1.jpeg" alt="world star records poster" />
      <Img src="../../poster3.jpeg" alt="world star records poster" />
      <Img src="../../poster.jpeg" alt="world star records poster" />
      <Img src="../../poster2.jpeg" alt="world star records poster" />
      <Img src="../../poster5.jpeg" alt="world star records poster" />
    </EventBox>
  )
}

export default Event
