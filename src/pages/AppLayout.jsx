import styled, { keyframes } from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../features/footer/Footer';
import Header from '../ui/Header';
import Main from '../ui/Main';

function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Header type="appLayout" />
      <Main>
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </Main>
      <Footer />
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageTransition = styled.div`
  animation: ${fadeIn} 280ms ease-out;
`;

export default AppLayout;
