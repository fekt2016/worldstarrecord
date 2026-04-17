import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import styled from 'styled-components';
import { eventTabs } from '../data/events';
import { Badge, Card, Container, Text } from '../ui/primitives';

function Event() {
  const [activeTab, setActiveTab] = useState(0);
  const activeEvent = eventTabs[activeTab];

  return (
    <PageSection>
      <StyledContainer>
        <Header>
          <Badge $tone="primary">Festival Archive</Badge>
          <Text as="h1" $size="3xl" $weight="black">
            Events & Highlights
          </Text>
        </Header>

        <TabsWrapper role="tablist" aria-label="Event tabs">
          <SlidingIndicator $index={activeTab} $count={eventTabs.length} />
          {eventTabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              $active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabsWrapper>

        <ContentPanel key={activeEvent.id} role="tabpanel">
          <DetailsCard $padding="lg">
            <Text as="h2" $size="2xl" $weight="bold">
              {activeEvent.title}
            </Text>
            <MetaGrid>
              <MetaItem>
                <Text as="span" $size="xs" $mono>
                  Date
                </Text>
                <Text as="span" $size="sm" $weight="semibold">
                  {activeEvent.date}
                </Text>
              </MetaItem>
              <MetaItem>
                <Text as="span" $size="xs" $mono>
                  Venue
                </Text>
                <Text as="span" $size="sm" $weight="semibold">
                  {activeEvent.venue}
                </Text>
              </MetaItem>
            </MetaGrid>
            <Text $size="md">{activeEvent.description}</Text>

            <LineupList>
              <Text as="h3" $size="sm" $weight="bold">
                Artists Lineup
              </Text>
              <LineupTags>
                {activeEvent.lineup.map((artist) => (
                  <LineupTag key={artist}>{artist}</LineupTag>
                ))}
              </LineupTags>
            </LineupList>
          </DetailsCard>

          <MediaCard $padding="sm">
            <VideoFacade videoId={activeEvent.videoId} title={activeEvent.title} />
          </MediaCard>
        </ContentPanel>
      </StyledContainer>
    </PageSection>
  );
}

function VideoFacade({ videoId, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <VideoFrame>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`${title} video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <VideoPoster type="button" onClick={() => setIsPlaying(true)}>
          <PosterImage src={thumbnail} alt={`${title} video thumbnail`} loading="lazy" />
          <PosterOverlay />
          <PlayButton aria-label={`Play ${title} video`}>
            <FiPlay size={22} aria-hidden="true" />
          </PlayButton>
        </VideoPoster>
      )}
    </VideoFrame>
  );
}

const PageSection = styled.section`
  padding-block: ${({ theme }) => `${theme.space[12]} ${theme.space[24]}`};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const TabsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[1]};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(18, 18, 38, 0.6);
`;

const SlidingIndicator = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.space[1]};
  bottom: ${({ theme }) => theme.space[1]};
  left: ${({ theme, $index, $count }) =>
    `calc(${theme.space[1]} + ${$index} * ((100% - ${theme.space[1]} * 2) / ${$count}))`};
  width: ${({ $count }) => `calc((100% - 8px) / ${$count})`};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(124, 58, 237, 0.35);
  transition: ${({ theme }) =>
    `left ${theme.motion.duration.normal} ${theme.motion.spring}`};
`;

const TabButton = styled.button`
  position: relative;
  z-index: 1;
  min-height: 2.4rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textStrong : theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
`;

const ContentPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: ${({ theme }) => theme.space[6]};
  opacity: 0;
  transform: translateY(10px);
  animation: content-fade 260ms ease-out forwards;

  @keyframes content-fade {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media ${({ theme }) => theme.mediaMax.lg} {
    grid-template-columns: 1fr;
  }
`;

const DetailsCard = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
`;

const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[3]};

  @media ${({ theme }) => theme.mediaMax.sm} {
    grid-template-columns: 1fr;
  }
`;

const MetaItem = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
`;

const LineupList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[2]};
`;

const LineupTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
  flex-wrap: wrap;
`;

const LineupTag = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

const MediaCard = styled(Card)`
  display: grid;
`;

const VideoFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: #000;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoPoster = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PosterOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(8, 8, 16, 0.7), rgba(8, 8, 16, 0.15)),
    radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent 45%);
`;

const PlayButton = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3.2rem;
  height: 3.2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: rgba(8, 8, 16, 0.72);
  color: ${({ theme }) => theme.colors.textStrong};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default Event;
