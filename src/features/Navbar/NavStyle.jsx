import styled from 'styled-components'

export const NavStyle = styled.nav`
  .navbar-collapse {
    & .navbar-box {
      & .sign {
      }

      & .navbar-items {
        &.showNavbar {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 15px;
          margin: 15px;
          width: 100%;
          background-color: red;
        }
        & .nav-link {
          margin-right: 1rem;
          opacity: 0.8;
          padding: 0.15rem 0.35rem;
          border: 1px solid transparent;
          border-radius: 3px;
          transition: all 0.2s ease;
          &:hover {
            border: 1px solid #f8f;
          }
          &.active {
            background-color: black;
            color: #fff;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
  & .navbar-logo {
    background-color: green;

    & .showMenu {
      background-color: red;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &.showNavbar {
  }
`
