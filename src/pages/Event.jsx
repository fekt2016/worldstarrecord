import { useState } from 'react'
import styled from 'styled-components'
import Video from '../ui/Video'

const EventBox = styled.div`
  padding: 8rem;

  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: space-around;
  align-items: flex-start;
`

const Posters = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-around;
  gap: 100px;
`

const PassEvent = styled.div`
  height: 20rem;
  flex: 1;
  background-image: url('../../2012event.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`
const PrevEvent = styled.div`
  flex: 1;
  background-image: url('../../ADONKO 2 FINGERS.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`
const CurEvent = styled.div`
  flex: 1;
  background-image: url('../../upcoming.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`

const PassDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PrevDetail = styled.div`
  width: 100%;
  height: 100rem;
`
const CurDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
function Event() {
  const [tab, setTab] = useState(0)

  return (
    <EventBox>
      <Posters>
        <PassEvent onClick={() => setTab(0)}></PassEvent>
        <PrevEvent onClick={() => setTab(1)}></PrevEvent>
        <CurEvent onClick={() => setTab(2)}></CurEvent>
      </Posters>
      {tab === 0 && <PassDetail>Event detail not available yet</PassDetail>}
      {tab === 1 && (
        <PrevDetail>
          <Video code={'tRmqK1lW_k4&'} />
        </PrevDetail>
      )}
      {tab === 2 && <CurDetail>Bahamas event date coming soon!!!!</CurDetail>}
    </EventBox>
  )
}

export default Event
