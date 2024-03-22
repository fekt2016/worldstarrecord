import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledDash = styled.div`
  padding: 4rem;
  display: flex;
  gap: 20px;
`
const StyledAside = styled.aside`
  /* padding: 2rem; */
  flex-basis: 25%;
  box-shadow: var(--shadow-md);
`
const StyledMain = styled.main`
  flex: 1;
`
const H2 = styled.h2`
  background-color: var(--color-primary-900);
  color: var(--color-white-100);
  text-align: center;
  text-transform: capitalize;
  padding: 1rem 0;
`
const StyledItem = styled.ul`
  padding: 2rem;
`
const List = styled.li`
  padding: 2rem;
  text-transform: capitalize;
`
function Dashboard() {
  return (
    <StyledDash>
      <StyledAside>
        <H2>My ticket</H2>

        <StyledItem>
          <List>my cart</List>
          <List>my favorite</List>
          <List>my reviews</List>
          <List>Account</List>
        </StyledItem>
      </StyledAside>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledDash>
  )
}

export default Dashboard
