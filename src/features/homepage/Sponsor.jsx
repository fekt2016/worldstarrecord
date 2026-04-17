import styled, { keyframes } from 'styled-components';
import { mediaPartners, sponsors, titleSponsors } from '../../data/sponsors';
import { Badge, Container, Text } from '../../ui/primitives';

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const tiers = [
  { title: 'Title Sponsors', logos: titleSponsors, size: 'large' },
  { title: 'Sponsors', logos: sponsors, size: 'medium' },
  { title: 'Media Partners', logos: mediaPartners, size: 'small' },
];

function Sponsor() {
  return (
    <Section aria-labelledby="homepage-sponsors-title">
      <StyledContainer>
        <Header>
          <Badge $tone="primary">Trusted By</Badge>
          <Text id="homepage-sponsors-title" as="h2" $size="3xl" $weight="black">
            Sponsors & Media Partners
          </Text>
        </Header>

        {tiers.map((tier) => (
          <Tier key={tier.title}>
            <TierLabel as="h3" $size="lg" $weight="bold">
              {tier.title}
            </TierLabel>
            <MarqueeWrap>
              <MarqueeTrack>
                {tier.logos.concat(tier.logos).map((logo, index) => (
                  <LogoLink
                    key={`${tier.title}-${logo.id}-${index}`}
                    href={logo.url}
                    aria-label={logo.name}
                    title={logo.name}
                  >
                    <LogoImage
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      $size={tier.size}
                    />
                  </LogoLink>
                ))}
              </MarqueeTrack>
            </MarqueeWrap>
          </Tier>
        ))}
      </StyledContainer>
    </Section>
  );
}

const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.space[24]};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[8]};
`;

const Header = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.space[3]};
`;

const Tier = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
`;

const TierLabel = styled(Text)`
  text-align: center;
`;

const MarqueeWrap = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: rgba(18, 18, 38, 0.42);
  padding-block: ${({ theme }) => theme.space[4]};
`;

const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[8]};
  width: max-content;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${marquee} 24s linear infinite;
  }
`;

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 8rem;
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.spring}`};

  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoImage = styled.img`
  width: auto;
  object-fit: contain;
  filter: grayscale(1) opacity(0.86);
  transition: ${({ theme }) =>
    `filter ${theme.motion.duration.normal} ${theme.motion.easeOut}`};

  ${({ $size }) => $size === 'large' && 'height: 4.5rem;'}
  ${({ $size }) => $size === 'medium' && 'height: 3.4rem;'}
  ${({ $size }) => $size === 'small' && 'height: 2.8rem;'}

  ${LogoLink}:hover & {
    filter: grayscale(0) opacity(1);
  }
`;

export default Sponsor;
