import EventsTicket from '../features/homepage/EventsTicket';
import Pictures from '../features/homepage/Pictures';
import Sponsor from '../features/homepage/Sponsor';
import Footer from '../features/footer/Footer';
import Header from '../ui/Header';
import styled, { keyframes } from 'styled-components';

function HomePage() {
  return (
    <PageTransition>
      <Header type="home" />
      <EventsTicket />
      <Pictures />
      <Sponsor />
      <Footer />
    </PageTransition>
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

export default HomePage;
