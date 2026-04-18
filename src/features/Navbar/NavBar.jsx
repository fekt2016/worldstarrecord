import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { Button, Container } from '../../ui/primitives';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const menuReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '-110%')});
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.easeOut},
    background-color ${theme.motion.duration.normal} ${theme.motion.easeOut},
    border-color ${theme.motion.duration.normal} ${theme.motion.easeOut}`};
  background: ${({ $isScrolled, theme }) =>
    $isScrolled ? 'rgba(8, 8, 16, 0.75)' : 'rgba(8, 8, 16, 0.35)'};
  border-bottom: 1px solid
    ${({ $isScrolled, theme }) =>
      $isScrolled ? theme.colors.borderSoft : 'transparent'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

const NavInner = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 5rem;
  gap: ${({ theme }) => theme.space[4]};
`;

const BrandLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.textStrong};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const BrandLogo = styled.img`
  height: 2.6rem;
  width: auto;
`;

const DesktopLinks = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};

  @media ${({ theme }) => theme.mediaMax.md} {
    display: none;
  }
`;

const linkIndicator = css`
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    height: 2px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.gradients.accent};
    transform: scaleX(0);
    transform-origin: center;
    transition: ${({ theme }) =>
      `transform ${theme.motion.duration.normal} ${theme.motion.spring}`};
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textBody};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: ${({ theme }) =>
    `color ${theme.motion.duration.fast} ${theme.motion.easeOut}`};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textStrong};
  }

  ${linkIndicator}
`;

const DesktopAction = styled.div`
  justify-self: end;

  @media ${({ theme }) => theme.mediaMax.md} {
    display: none;
  }
`;

const MenuButton = styled.button`
  justify-self: end;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.full};
  width: 2.8rem;
  height: 2.8rem;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.18);
  color: ${({ theme }) => theme.colors.textStrong};

  @media ${({ theme }) => theme.mediaMax.md} {
    display: inline-flex;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[8]};
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(168, 85, 247, 0.24),
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(236, 72, 153, 0.2),
      transparent 45%
    ),
    rgba(8, 8, 16, 0.96);
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.space[6]};
  right: ${({ theme }) => theme.space[6]};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radius.full};
  width: 2.8rem;
  height: 2.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.18);
  color: ${({ theme }) => theme.colors.textStrong};
`;

const MobileLinks = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.space[6]};
  text-align: center;
`;

const MobileLinkItem = styled.li`
  opacity: 0;
  animation: ${menuReveal} 420ms ease-out forwards;
  animation-delay: ${({ $index }) => `${$index * 70}ms`};
`;

const MobileLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textStrong};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.06em;

  &.active {
    background: ${({ theme }) => theme.gradients.accent};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

function NavBar({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 8);

      if (currentY < 16) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 886) {
        setIsOpen(false);
      }
    });

    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <StyledNav
        $isVisible={isVisible}
        $isScrolled={isScrolled}
        aria-label={type === 'home' ? 'Homepage navigation' : 'Site navigation'}
      >
        <NavInner>
          <BrandLink to="/" aria-label="World Star Records home">
            <BrandLogo src="/LOGO.jpeg" alt="World Star Records logo" />
          </BrandLink>

          <DesktopLinks>
            {links.map((link) => (
              <li key={link.to}>
                <StyledLink to={link.to}>{link.label}</StyledLink>
              </li>
            ))}
          </DesktopLinks>

          <DesktopAction>
            <Button to="/events" variant="primary" size="small">
              Get Tickets
            </Button>
          </DesktopAction>

          <MenuButton
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsOpen(true)}
          >
            <AiOutlineMenu size={20} aria-hidden="true" />
          </MenuButton>
        </NavInner>
      </StyledNav>

      <MobileOverlay
        id="mobile-navigation-menu"
        $open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <CloseButton
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose size={20} aria-hidden="true" />
        </CloseButton>

        <MobileLinks>
          {links.map((link, index) => (
            <MobileLinkItem key={link.to} $index={index}>
              <MobileLink to={link.to} onClick={() => setIsOpen(false)}>
                {link.label}
              </MobileLink>
            </MobileLinkItem>
          ))}
        </MobileLinks>

        <Button to="/events" variant="ghost" size="medium" onClick={() => setIsOpen(false)}>
          Get Tickets
        </Button>
      </MobileOverlay>
    </>
  );
}

NavBar.propTypes = {
  type: PropTypes.string,
};

NavBar.defaultProps = {
  type: 'default',
};

export default NavBar;
