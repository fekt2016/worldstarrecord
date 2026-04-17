import styled from 'styled-components';
import { featuredEvents } from '../../data/events';
import { Badge, Button, Card, Container, Text } from '../../ui/primitives';

function EventsTicket() {
  return (
    <Section id="homepage-events" aria-labelledby="homepage-events-title">
      <StyledContainer>
        <HeaderRow>
          <div>
            <Badge $tone="primary">Live Experience</Badge>
            <SectionTitle id="homepage-events-title" as="h2" $size="3xl" $weight="black">
              Featured Festival Events
            </SectionTitle>
          </div>
        </HeaderRow>

        <CardsGrid role="list">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} role="listitem" $padding="sm">
              <EventImage src={event.image} alt={`${event.name} crowd scene`} loading="lazy" />
              <Overlay />
              <Content>
                <Text as="h3" $size="xl" $weight="bold">
                  {event.name}
                </Text>
                <Meta>
                  <Text as="span" $size="sm" $mono>
                    {event.date}
                  </Text>
                  <Text as="span" $size="sm">
                    {event.venue}
                  </Text>
                </Meta>
                <Button to={event.cta} size="small" variant="ghost">
                  View Event
                </Button>
              </Content>
            </EventCard>
          ))}
        </CardsGrid>
      </StyledContainer>
    </Section>
  );
}

const Section = styled.section`
  padding-block: ${({ theme }) => theme.space[16]};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: ${({ theme }) => theme.space[4]};
`;

const SectionTitle = styled(Text)`
  margin-top: ${({ theme }) => theme.space[3]};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[4]};

  @media ${({ theme }) => theme.mediaMax.md} {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: ${({ theme }) => theme.space[2]};
  }
`;

const EventCard = styled(Card)`
  position: relative;
  min-height: 24rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(18, 18, 38, 0.52);
  scroll-snap-align: start;

  @media ${({ theme }) => theme.mediaMax.md} {
    min-width: 17.5rem;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => `${theme.shadows.lg}, ${theme.shadows.purpleGlow}`};
  }
`;

const EventImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(8, 8, 16, 0.92), rgba(8, 8, 16, 0.42)),
    linear-gradient(to right, rgba(124, 58, 237, 0.08), rgba(236, 72, 153, 0.08));
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[4]};
`;

const Meta = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
`;

export default EventsTicket;
