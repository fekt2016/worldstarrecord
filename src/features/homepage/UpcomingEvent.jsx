import styled, { keyframes } from 'styled-components';
import { Badge, Button, Container, Text } from '../../ui/primitives';

const artists = [
  { name: 'Bessah Simons', role: 'MUSIGA President' },
  { name: 'Nana Aboagye Dacosta', role: 'Nana Gyinadu Kuffour II' },
  { name: 'Kaakyire Kwame Appiah', role: 'Ade3emouduro' },
  { name: 'Paa Solo', role: 'Sibo Brothers' },
  { name: 'Kofi Nti', role: 'Featured Artist' },
  { name: 'S3nti', role: 'Featured Artist' },
  { name: 'Animdifour Cultural Group', role: 'Cultural Performer' },
  { name: 'Odeefour Int. Band', role: 'International Band' },
];

const merch = [
  {
    id: 'cap',
    name: 'Official Festival Cap',
    image: '/merch-cap.jpg',
    description: 'Euro-Afric 2026 embroidered cap with African Union & EU flags',
  },
  {
    id: 'polo',
    name: 'Official Festival Polo',
    image: '/merch-polo.jpg',
    description: 'Front: festival graphic print · Back: World Star Records logo + theme',
  },
];

function UpcomingEvent() {
  return (
    <Section id="upcoming-event" aria-labelledby="upcoming-event-title">
      <BgOrb $pos="left" />
      <BgOrb $pos="right" />

      <StyledContainer>
        {/* ── Header ── */}
        <HeaderGroup>
          <Badge $tone="accent">Upcoming Event</Badge>
          <SectionTitle id="upcoming-event-title" as="h2" $size="3xl" $weight="black">
            Official Launching 2026.
          </SectionTitle>
          <Text $size="xl" $weight="bold" style={{ color: '#f97316' }}>
            Euro-Afric International Music &amp; Cultural Festival
          </Text>
          <Text $size="md" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '52ch', marginTop: '8px' }}>
            Napoli, Italy — Celebrating diplomacy, peace, unity and development through music.
          </Text>
        </HeaderGroup>

        {/* ── Main content grid ── */}
        <ContentGrid>
          {/* Poster */}
          <PosterWrap>
            <PosterImg
              src="/euro-afric-2026-flyer.jpg"
              alt="2026 Euro-Afric International Music and Cultural Festival flyer — Napoli, Italy official launch artwork"
            />
            <PosterGlow />
          </PosterWrap>

          {/* Details */}
          <DetailsCol>
            <ThemeBanner>
              <Text $size="xs" $weight="semibold" style={{ color: '#f97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Theme
              </Text>
              <Text $size="md" $weight="bold" style={{ lineHeight: 1.4 }}>
                To Promote Cultural Diplomacy, Peace, Unity and Development Through Music
              </Text>
            </ThemeBanner>

            <InfoGrid>
              <InfoItem>
                <InfoIcon aria-hidden="true">📅</InfoIcon>
                <div>
                  <InfoLabel>Date</InfoLabel>
                  <InfoValue>13th June, 2026</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon aria-hidden="true">🕕</InfoIcon>
                <div>
                  <InfoLabel>Time</InfoLabel>
                  <InfoValue>6:00 AM – 2:00 PM</InfoValue>
                </div>
              </InfoItem>
              <InfoItem $span>
                <InfoIcon aria-hidden="true">📍</InfoIcon>
                <div>
                  <InfoLabel>Venue</InfoLabel>
                  <InfoValue>Via Domitiana KM 3981030, Castelvolturno Ischitella, Napoli, Italy</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon aria-hidden="true">📞</InfoIcon>
                <div>
                  <InfoLabel>Contact</InfoLabel>
                  <InfoValue>+393662013996</InfoValue>
                  <InfoValue>+393791906288</InfoValue>
                  <InfoValue>+233546009191</InfoValue>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon aria-hidden="true">🌐</InfoIcon>
                <div>
                  <InfoLabel>Website</InfoLabel>
                  <InfoValue>www.worldstargh.com</InfoValue>
                </div>
              </InfoItem>
            </InfoGrid>

            <PoweredBy>
              <Text $size="xs" $weight="semibold" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Powered By
              </Text>
              <Text $size="sm" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                World Star Records Ltd · Ghana Union Association Napoli, Italy ·
                Holland Music Production (Holland) · CKO Golden Record Label, USA
              </Text>
            </PoweredBy>
          </DetailsCol>
        </ContentGrid>

        {/* ── Artists ── */}
        <ArtistsSection aria-labelledby="artists-title">
          <Text id="artists-title" as="h3" $size="xl" $weight="bold" style={{ marginBottom: '24px' }}>
            Featured Artists &amp; Performers
          </Text>
          <ArtistsGrid role="list">
            {artists.map((a) => (
              <ArtistCard key={a.name} role="listitem">
                <ArtistDot aria-hidden="true" />
                <div>
                  <Text $size="sm" $weight="bold">{a.name}</Text>
                  <Text $size="xs" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{a.role}</Text>
                </div>
              </ArtistCard>
            ))}
          </ArtistsGrid>
        </ArtistsSection>

        {/* ── Merchandise ── */}
        <MerchSection aria-labelledby="merch-title">
          <MerchHeader>
            <Badge $tone="primary">Official Merchandise</Badge>
            <Text id="merch-title" as="h3" $size="xl" $weight="bold" style={{ marginTop: '12px' }}>
              Rep the Festival
            </Text>
          </MerchHeader>
          <MerchGrid role="list">
            {merch.map((item) => (
              <MerchCard key={item.id} role="listitem">
                <MerchImageWrap>
                  <MerchImg
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />
                  <MerchFallback aria-hidden="true">🛍️</MerchFallback>
                </MerchImageWrap>
                <MerchInfo>
                  <Text $size="md" $weight="bold">{item.name}</Text>
                  <Text $size="sm" style={{ color: 'rgba(255,255,255,0.55)', marginTop: '6px', lineHeight: 1.5 }}>
                    {item.description}
                  </Text>
                </MerchInfo>
              </MerchCard>
            ))}
          </MerchGrid>
        </MerchSection>

        {/* ── CTA ── */}
        <CTARow>
          <Button to="/events" size="large" variant="primary">
            View Event Details
          </Button>
          <Button to="/contact" size="large" variant="ghost">
            Contact Us
          </Button>
        </CTARow>
      </StyledContainer>
    </Section>
  );
}

/* ── Keyframes ── */
const pulse = keyframes`
  0%, 100% { opacity: 0.18; transform: scale(1); }
  50%       { opacity: 0.28; transform: scale(1.06); }
`;

/* ── Styled components ── */
const Section = styled.section`
  position: relative;
  padding-block: ${({ theme }) => theme.space[16]};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgBase};
`;

const BgOrb = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  animation: ${pulse} 6s ease-in-out infinite;

  ${({ $pos }) =>
    $pos === 'left'
      ? `
    top: -120px;
    left: -200px;
    background: radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 65%);
  `
      : `
    bottom: -100px;
    right: -180px;
    background: radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%);
    animation-delay: 3s;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[12]};
`;

const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

const SectionTitle = styled(Text)`
  background: linear-gradient(120deg, #f97316 0%, #ec4899 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.05;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[8]};
  align-items: start;

  @media ${({ theme }) => theme.mediaMax.md} {
    grid-template-columns: 1fr;
  }
`;

const PosterWrap = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
`;

const PosterImg = styled.img`
  width: 100%;
  display: block;
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: 0 24px 64px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(255,255,255,0.07);
  transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: scale(1.015);
  }
`;

const PosterGlow = styled.div`
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgba(249, 115, 22, 0.3);
  pointer-events: none;
`;

const DetailsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`;

const ThemeBanner = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  background: rgba(249, 115, 22, 0.08);
  border: 1px solid rgba(249, 115, 22, 0.28);
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[3]};
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.md};

  ${({ $span }) => $span && 'grid-column: 1 / -1;'}
`;

const InfoIcon = styled.span`
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-top: 2px;
`;

const InfoLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 4px;
`;

const InfoValue = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textBody};
  margin: 0 0 2px;
  line-height: 1.4;
`;

const PoweredBy = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};
`;

const ArtistsSection = styled.div``;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.space[3]};

  @media ${({ theme }) => theme.mediaMax.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.mediaMax.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ArtistCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[3]};
  padding: ${({ theme }) => theme.space[3]};
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: border-color 280ms ease, box-shadow 280ms ease;

  &:hover {
    border-color: rgba(249, 115, 22, 0.4);
    box-shadow: 0 4px 20px rgba(249, 115, 22, 0.12);
  }
`;

const ArtistDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(120deg, #f97316, #ec4899);
  flex-shrink: 0;
  margin-top: 5px;
`;

const MerchSection = styled.div``;

const MerchHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const MerchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media ${({ theme }) => theme.mediaMax.sm} {
    grid-template-columns: 1fr;
  }
`;

const MerchCard = styled.div`
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 280ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 48px rgba(124, 58, 237, 0.22);
  }
`;

const MerchImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
`;

const MerchImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MerchFallback = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  background: rgba(255, 255, 255, 0.03);
`;

const MerchInfo = styled.div`
  padding: ${({ theme }) => theme.space[4]};
`;

const CTARow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  flex-wrap: wrap;

  @media ${({ theme }) => theme.mediaMax.sm} {
    flex-direction: column;
  }
`;

export default UpcomingEvent;
