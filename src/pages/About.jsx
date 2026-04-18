import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { partners } from '../data/partners';
import { Badge, Card, Container, Text } from '../ui/primitives';

const storySections = [
  {
    id: 'about-story',
    title: 'Built for artists, rooted in culture',
    body: 'World Star Records started in 2008 to support emerging musicians through artist development, brand strategy, and high-impact live events.',
    image: '/world3.jpeg',
  },
  {
    id: 'about-vision',
    title: 'Vision with international reach',
    body: 'From peace-themed concerts to global music collaborations, the platform bridges Ghanaian creative energy with worldwide audiences.',
    image: '/world4.jpeg',
  },
];

const timeline = [
  {
    year: '2008',
    text: 'World Star Records launches artist development and peace campaign activations.',
  },
  {
    year: '2012',
    text: 'Partnership with national cultural institutions to produce election peace concerts.',
  },
  {
    year: '2020',
    text: 'Festival format expanded into multi-day programming with international guests.',
  },
  {
    year: '2026',
    text: 'Next-generation World Star Records experience introduces immersive fan and creator zones.',
  },
];

const stats = [
  { id: 'artists', label: 'Artists Supported', value: 180, suffix: '+' },
  { id: 'events', label: 'Events Produced', value: 42, suffix: '+' },
  { id: 'countries', label: 'Partner Countries', value: 9, suffix: '' },
];

function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  const memoizedStats = useMemo(() => stats, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      return undefined;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1200;

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts(memoizedStats.map((item) => Math.floor(item.value * progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, memoizedStats]);

  return (
    <PageSection>
      <StyledContainer>
        <Header>
          <Badge $tone="accent">About World Star Records</Badge>
          <Text as="h1" $size="3xl" $weight="black">
            World Star Records Ltd
          </Text>
        </Header>

        {storySections.map((section, index) => (
          <StoryRow key={section.id} $reverse={index % 2 === 1}>
            <Media
              src={section.image}
              alt={`${section.title} visual`}
              loading="lazy"
            />
            <StoryContent>
              <Text as="h2" $size="2xl" $weight="bold">
                {section.title}
              </Text>
              <Text $size="md">{section.body}</Text>
            </StoryContent>
          </StoryRow>
        ))}

        <TimelineSection aria-labelledby="about-timeline-title">
          <Text id="about-timeline-title" as="h2" $size="2xl" $weight="bold">
            Our Journey
          </Text>
          <TimelineList>
            {timeline.map((item) => (
              <TimelineItem key={item.year}>
                <YearMarker>{item.year}</YearMarker>
                <Text $size="sm">{item.text}</Text>
              </TimelineItem>
            ))}
          </TimelineList>
        </TimelineSection>

        <StatsRow ref={statsRef}>
          {memoizedStats.map((item, index) => (
            <StatCard key={item.id} $padding="md">
              <Text as="span" $size="2xl" $weight="black" $gradient>
                {counts[index]}
                {item.suffix}
              </Text>
              <Text as="span" $size="sm">
                {item.label}
              </Text>
            </StatCard>
          ))}
        </StatsRow>

        <VisionSection>
          <Text as="h2" $size="2xl" $weight="bold">
            Team & Vision Partners
          </Text>
          <VisionGrid>
            {partners.map((partner) => (
              <VisionCard key={partner.id} $padding="md">
                <PartnerLogo
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                />
                <Text as="h3" $size="sm" $weight="semibold">
                  {partner.name}
                </Text>
              </VisionCard>
            ))}
          </VisionGrid>
        </VisionSection>
      </StyledContainer>
    </PageSection>
  );
}

const PageSection = styled.section`
  padding-block: ${({ theme }) => `${theme.space[12]} ${theme.space[24]}`};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[12]};
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const StoryRow = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: center;

  ${({ $reverse }) => $reverse && 'direction: rtl;'}
  ${({ $reverse }) => $reverse && 'text-align: left;'}

  @media ${({ theme }) => theme.mediaMax.lg} {
    grid-template-columns: 1fr;
    direction: ltr;
  }
`;

const StoryContent = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[3]};
  direction: ltr;
`;

const Media = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

const TimelineSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
`;

const TimelineList = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
  padding-left: ${({ theme }) => theme.space[8]};

  &::before {
    content: '';
    position: absolute;
    left: 0.65rem;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(124, 58, 237, 0.7),
      rgba(236, 72, 153, 0.7)
    );
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.space[2]};
`;

const YearMarker = styled.span`
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textStrong};

  &::before {
    content: '';
    position: absolute;
    left: -1.9rem;
    top: 0.35rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.gradients.accent};
    box-shadow: ${({ theme }) => theme.shadows.purpleGlow};
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[4]};

  @media ${({ theme }) => theme.mediaMax.md} {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(Card)`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const VisionSection = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.space[4]};

  @media ${({ theme }) => theme.mediaMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.mediaMax.sm} {
    grid-template-columns: 1fr;
  }
`;

const VisionCard = styled(Card)`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const PartnerLogo = styled.img`
  max-height: 3.2rem;
  width: auto;
  object-fit: contain;
`;

export default About;
