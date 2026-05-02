import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';
import { eventHighlights } from '../data/events';
import NavBar from '../features/Navbar/NavBar';
import { Badge, Button, Card, Container, Text } from './primitives';

// June 13 2026, 6:00 AM Naples local time (UTC+2 = 04:00 UTC)
const EVENT_DATE = '2026-06-13T04:00:00.000Z';

const float = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -20px, 0);
  }
`;

function getTimeRemaining(targetDate) {
  const now = Date.now();
  const distance = Math.max(targetDate.getTime() - now, 0);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function Header({ type }) {
  const targetDate = useMemo(() => new Date(EVENT_DATE), []);
  const [countdown, setCountdown] = useState(() =>
    getTimeRemaining(targetDate),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getTimeRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>
      <NavBar type={type} />
      {type === 'home' ? (
        <HeroSection>
          <HeroOrbs aria-hidden="true">
            <Orb />
            <Orb />
            <Orb />
          </HeroOrbs>

          <HeroContainer>
            <Badge $tone="accent">29th August, 2026· Napoli, Italy</Badge>
            <HeroTitle as="h1" $size="hero" $weight="black" $gradient>
              World Star Records
            </HeroTitle>
            <HeroSubtitle $size="lg" $mono>
              Euro-Afric International Music &amp; Cultural Festival — Napoli, Italy.
            </HeroSubtitle>

            <CountdownGrid aria-label="Countdown to Euro-Afric International Music & Cultural Festival">
              <CountCard>
                <Text as="span" $size="2xl" $weight="bold">
                  {String(countdown.days).padStart(2, '0')}
                </Text>
                <Text as="span" $size="xs" $mono>
                  Days
                </Text>
              </CountCard>
              <CountCard>
                <Text as="span" $size="2xl" $weight="bold">
                  {String(countdown.hours).padStart(2, '0')}
                </Text>
                <Text as="span" $size="xs" $mono>
                  Hours
                </Text>
              </CountCard>
              <CountCard>
                <Text as="span" $size="2xl" $weight="bold">
                  {String(countdown.minutes).padStart(2, '0')}
                </Text>
                <Text as="span" $size="xs" $mono>
                  Minutes
                </Text>
              </CountCard>
              <CountCard>
                <Text as="span" $size="2xl" $weight="bold">
                  {String(countdown.seconds).padStart(2, '0')}
                </Text>
                <Text as="span" $size="xs" $mono>
                  Seconds
                </Text>
              </CountCard>
            </CountdownGrid>

            <HeroActions>
              <Button to="/events" variant="primary" size="large">
                Get Tickets
              </Button>
              <Button
                to="/gallery"
                variant="ghost"
                size="large"
                icon={<FiArrowRight />}
              >
                Watch Recap
              </Button>
            </HeroActions>

            <Highlights role="list" aria-label="Festival highlights">
              {eventHighlights.map((item) => (
                <HighlightItem key={item.label} role="listitem">
                  <Text as="span" $size="xs" $mono>
                    {item.label}
                  </Text>
                  <Text as="span" $size="sm" $weight="semibold">
                    {item.value}
                  </Text>
                </HighlightItem>
              ))}
            </Highlights>
          </HeroContainer>

          <ScrollIndicator
            href="#upcoming-event"
            aria-label="Scroll to upcoming event section"
          >
            <FiArrowDown size={18} aria-hidden="true" />
          </ScrollIndicator>
        </HeroSection>
      ) : null}
    </>
  );
}

Header.propTypes = {
  type: PropTypes.string,
};

Header.defaultProps = {
  type: 'default',
};

export default Header;

const HeroSection = styled.header`
  position: relative;
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    linear-gradient(140deg, rgba(8, 8, 16, 0.94), rgba(8, 8, 16, 0.72)),
    radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.32), transparent 42%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.24), transparent 45%);
`;

const HeroContainer = styled(Container).attrs({ $width: 'default' })`
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[6]};
  padding-block: ${({ theme }) => theme.space[16]};
`;

const HeroTitle = styled(Text)`
  white-space: nowrap;
  text-align: center;
`;

const HeroSubtitle = styled(Text)`
  max-width: 48ch;
  color: ${({ theme }) => theme.colors.textBody};
`;

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[3]};
  width: min(100%, 30rem);

  @media ${({ theme }) => theme.mediaMax.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CountCard = styled(Card).attrs({ as: 'div', $padding: 'sm' })`
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
`;

const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const HighlightItem = styled(Card).attrs({ as: 'div', $padding: 'sm' })`
  min-width: 9rem;
  display: grid;
  gap: ${({ theme }) => theme.space[2]};
  text-align: center;
  background: rgba(18, 18, 38, 0.65);
`;

const HeroOrbs = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const Orb = styled.span`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.full};
  filter: blur(2px);
  opacity: 0.65;

  &:nth-child(1) {
    width: 14rem;
    height: 14rem;
    top: 14%;
    left: 10%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.38), transparent 68%);
  }

  &:nth-child(2) {
    width: 16rem;
    height: 16rem;
    right: 8%;
    top: 26%;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.34), transparent 70%);
  }

  &:nth-child(3) {
    width: 18rem;
    height: 18rem;
    bottom: 8%;
    left: 18%;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.26), transparent 72%);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${float} 8s ease-in-out infinite;
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(3) {
      animation-delay: 2s;
    }
  }
`;

const ScrollIndicator = styled.a`
  position: absolute;
  left: 50%;
  bottom: ${({ theme }) => theme.space[6]};
  transform: translateX(-50%);
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textStrong};
  background: rgba(18, 18, 38, 0.72);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${float} 2.4s ease-in-out infinite;
  }
`;
