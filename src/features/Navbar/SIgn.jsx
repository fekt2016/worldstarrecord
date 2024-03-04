import styled from 'styled-components'

const Sign = styled.div`
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  & .link {
    color: var(--color-primary-900);
    border: 1px solid var(--color-primary-900);
    padding: 0.5rem 1.2rem;
    border-radius: 100px;
    transition: all 0.3s ease;
  }
  & .login:hover {
    background-color: var(--color-primary-900);
    color: var(--color-white-100);
    transform: scale(1.2);
  }
  & .reg {
    background-color: var(--color-primary-900);
    color: var(--color-white-100);

    &:hover {
      background-color: var(--color-primary-100);
      transform: scale(1.2);
    }
  }
`
export default Sign
