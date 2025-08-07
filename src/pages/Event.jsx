import { useState } from 'react'
import styled, { css } from 'styled-components'
import Video from '../ui/Video'

const styles = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
  transition: all 0.4s;
  flex: 1;
  &:hover {
    transform: translateY(10px);
  }
`

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

  background-image: url('../../2012event.jpeg');
  ${styles}
`
const PrevEvent = styled.div`
  background-image: url('../../ADONKO 2 FINGERS.jpg');
  ${styles}
`
const CurEvent = styled.div`
  background-image: url('../../upcoming.jpeg');
  ${styles}
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
const Active = styled.div`
  width: 50%;
  height: 5px;
  background-color: var(--color-grey-300);
  position: absolute;
  bottom: -20px;
  left: 30%;
  transform: translate(-50%);
  border-radius: 100px;
  transform: skew(45deg);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
function Event() {
  const [tab, setTab] = useState(0)

  return (
    <EventBox>
      <Posters>
        <PassEvent active={tab} onClick={() => setTab(0)}>
          {tab === 0 && <Active></Active>}
        </PassEvent>
        <PrevEvent onClick={() => setTab(1)}>
          {tab === 1 && <Active></Active>}
        </PrevEvent>
        <CurEvent onClick={() => setTab(2)}>
          {tab === 2 && <Active></Active>}
        </CurEvent>
      </Posters>
      {tab === 0 && (
        <PassDetail>Ghana 2012 detail not available yet</PassDetail>
      )}
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
