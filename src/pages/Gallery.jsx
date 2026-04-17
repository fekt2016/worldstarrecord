import { useEffect, useMemo, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import styled from 'styled-components';
import { galleryImages } from '../data/gallery';
import { Badge, Container, Text } from '../ui/primitives';

const filterOptions = ['All', '2024', '2023', 'Artists', 'Culture', 'Stage'];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleIds, setVisibleIds] = useState(() => new Set());
  const [activeIndex, setActiveIndex] = useState(-1);
  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.year === activeFilter || image.category === activeFilter,
    );
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-image-id');
            setVisibleIds((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.2 },
    );

    const targets = document.querySelectorAll('[data-reveal-image="true"]');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [filteredImages]);

  useEffect(() => {
    if (activeIndex < 0) {
      return undefined;
    }

    lastFocusedRef.current = document.activeElement;
    modalRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(-1);
        return;
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev >= filteredImages.length - 1 ? 0 : prev + 1,
        );
        return;
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev <= 0 ? filteredImages.length - 1 : prev - 1,
        );
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      lastFocusedRef.current?.focus?.();
    };
  }, [activeIndex, filteredImages]);

  const activeImage = activeIndex >= 0 ? filteredImages[activeIndex] : null;

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev >= filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageSection>
      <StyledContainer>
        <Header>
          <Badge $tone="accent">Festival Gallery</Badge>
          <Text as="h1" $size="3xl" $weight="black">
            Moments That Defined WorldStar
          </Text>
        </Header>

        <Tabs role="tablist" aria-label="Gallery filters">
          {filterOptions.map((filter) => (
            <TabButton
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              $active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </TabButton>
          ))}
        </Tabs>

        <MasonryGrid>
          {filteredImages.map((image, index) => {
            const isVisible = visibleIds.has(image.id);
            return (
              <CardWrap
                key={image.id}
                type="button"
                data-reveal-image="true"
                data-image-id={image.id}
                $visible={isVisible}
                onClick={() => openLightbox(index)}
                aria-label={`Open image: ${image.title}`}
              >
                <GalleryImage src={image.src} alt={image.title} loading="lazy" />
                <CardCaption>
                  <Text as="span" $size="xs" $mono>
                    {image.year} · {image.category}
                  </Text>
                  <Text as="span" $size="sm" $weight="semibold">
                    {image.title}
                  </Text>
                </CardCaption>
              </CardWrap>
            );
          })}
        </MasonryGrid>
      </StyledContainer>

      {activeImage ? (
        <LightboxOverlay
          onClick={() => setActiveIndex(-1)}
          role="presentation"
        >
          <LightboxDialog
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer for ${activeImage.title}`}
            ref={modalRef}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <IconButton
              type="button"
              aria-label="Close lightbox"
              onClick={() => setActiveIndex(-1)}
            >
              <FiX size={20} aria-hidden="true" />
            </IconButton>

            <NavButton
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              $side="left"
            >
              <FiChevronLeft size={20} aria-hidden="true" />
            </NavButton>

            <LightboxImage src={activeImage.src} alt={activeImage.title} />

            <NavButton
              type="button"
              aria-label="Next image"
              onClick={goNext}
              $side="right"
            >
              <FiChevronRight size={20} aria-hidden="true" />
            </NavButton>

            <LightboxCaption>
              <Text as="span" $size="sm" $weight="semibold">
                {activeImage.title}
              </Text>
              <Text as="span" $size="xs" $mono>
                {activeImage.year} · {activeImage.category}
              </Text>
            </LightboxCaption>
          </LightboxDialog>
        </LightboxOverlay>
      ) : null}
    </PageSection>
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

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`;

const TabButton = styled.button`
  min-height: 2.2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.borderStrong : theme.colors.borderSoft};
  background: ${({ $active, theme }) =>
    $active ? 'rgba(124, 58, 237, 0.28)' : 'rgba(255, 255, 255, 0.04)'};
  color: ${({ theme }) => theme.colors.textStrong};
  padding-inline: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: ${({ theme }) => theme.space[4]};

  @media ${({ theme }) => theme.mediaMax.md} {
    column-count: 2;
  }

  @media ${({ theme }) => theme.mediaMax.sm} {
    column-count: 1;
  }
`;

const CardWrap = styled.button`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[4]};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: rgba(18, 18, 38, 0.52);
  break-inside: avoid;
  cursor: pointer;
  transform: translateY(${({ $visible }) => ($visible ? '0' : '20px')});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.easeOut},
    opacity ${theme.motion.duration.normal} ${theme.motion.easeOut}`};
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardCaption = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[3]};
  text-align: left;
`;

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1500;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.space[6]};
  background: rgba(8, 8, 16, 0.88);
`;

const LightboxDialog = styled.div`
  position: relative;
  width: min(100%, 64rem);
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  background: rgba(18, 18, 38, 0.94);
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  animation: lightbox-scale 260ms ease-out;

  @keyframes lightbox-scale {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const LightboxImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  background: #000;
`;

const IconButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[3]};
  right: ${({ theme }) => theme.space[3]};
  z-index: 2;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: rgba(8, 8, 16, 0.76);
  color: ${({ theme }) => theme.colors.textStrong};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side }) => $side}: ${({ theme }) => theme.space[3]};
  transform: translateY(-50%);
  z-index: 2;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: rgba(8, 8, 16, 0.76);
  color: ${({ theme }) => theme.colors.textStrong};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const LightboxCaption = styled.figcaption`
  display: grid;
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[4]};
  text-align: center;
`;

export default Gallery;
