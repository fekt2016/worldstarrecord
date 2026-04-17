import styled from 'styled-components';
import { galleryImages } from '../../data/gallery';
import { Badge, Button, Card, Container, Text } from '../../ui/primitives';

function Pictures() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <Section aria-labelledby="homepage-gallery-preview-title">
      <StyledContainer>
        <Header>
          <div>
            <Badge $tone="accent">Gallery Preview</Badge>
            <Text id="homepage-gallery-preview-title" as="h2" $size="3xl" $weight="black">
              Relive The Atmosphere
            </Text>
          </div>
          <Button to="/gallery" variant="ghost" size="small">
            Explore Full Gallery
          </Button>
        </Header>

        <GalleryGrid role="list">
          {previewImages.map((item) => (
            <GalleryCard key={item.id} role="listitem" $padding="sm">
              <Image src={item.src} alt={item.title} loading="lazy" />
              <Caption>
                <Text as="span" $size="xs" $mono>
                  {item.year} · {item.category}
                </Text>
                <Text as="span" $size="sm" $weight="semibold">
                  {item.title}
                </Text>
              </Caption>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </StyledContainer>
    </Section>
  );
}

const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.space[16]};
`;

const StyledContainer = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[4]};
`;

const GalleryGrid = styled.div`
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

const GalleryCard = styled(Card)`
  min-height: 18rem;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 11;
`;

const Caption = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[4]};
`;

export default Pictures;
