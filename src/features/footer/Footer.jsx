import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsappSquare, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Text } from '../../ui/primitives';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: FaFacebook,
    color: '#3b5998',
  },
  {
    label: 'Twitter',
    href: 'https://x.com',
    icon: FaTwitter,
    color: '#1da1f2',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com',
    icon: FaTiktok,
    color: '#00f2ea',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: FaInstagram,
    color: '#d62976',
  },
  {
    label: 'WhatsApp',
    href: 'https://www.whatsapp.com',
    icon: FaWhatsappSquare,
    color: '#25d366',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: FaYoutube,
    color: '#cd201f',
  },
];

const StyledFooter = styled.footer`
  position: relative;
  margin-top: ${({ theme }) => theme.space[24]};
  padding-block: ${({ theme }) => `${theme.space[12]} ${theme.space[8]}`};
  background: ${({ theme }) => theme.colors.bgBase};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.gradients.accent};
  }
`;

const FooterGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: ${({ theme }) => theme.space[8]};

  @media ${({ theme }) => theme.mediaMax.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${({ theme }) => theme.mediaMax.sm} {
    grid-template-columns: 1fr;
  }
`;

const BrandColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space[4]};
`;

const BrandLogo = styled.img`
  height: 3rem;
  width: auto;
`;

const ColumnTitle = styled(Text).attrs({ as: 'h3', $size: 'lg', $weight: 'bold' })`
  color: ${({ theme }) => theme.colors.textStrong};
`;

const LinkList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.space[3]};
`;

const FooterLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: ${({ theme }) =>
    `color ${theme.motion.duration.fast} ${theme.motion.easeOut}`};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textStrong};
  }
`;

const SocialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[3]};
`;

const SocialLink = styled.a`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  color: ${({ $color, theme }) => $color || theme.colors.textBody};
  background: rgba(255, 255, 255, 0.02);
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.spring},
    box-shadow ${theme.motion.duration.normal} ${theme.motion.easeOut}`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 0 1px ${({ $color }) => $color}, 0 0 18px ${({ $color }) => $color}66;
  }
`;

const NewsletterForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.space[3]};
`;

const NewsletterInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[4]}`};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.textStrong};
`;

const FooterBottom = styled(Container)`
  margin-top: ${({ theme }) => theme.space[8]};
  padding-top: ${({ theme }) => theme.space[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.borderSoft};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3]};
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterGrid>
        <BrandColumn>
          <BrandLogo src="/LOGO.jpeg" alt="World Star Records logo" />
          <Text $size="sm">
            World Star Records connects artists, fans, and culture through
            high-energy festival experiences.
          </Text>
        </BrandColumn>

        <div>
          <ColumnTitle>Navigation</ColumnTitle>
          <LinkList>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </li>
            ))}
          </LinkList>
        </div>

        <div>
          <ColumnTitle>Social</ColumnTitle>
          <SocialList>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  $color={social.color}
                >
                  <Icon size={16} aria-hidden="true" />
                </SocialLink>
              );
            })}
          </SocialList>
        </div>

        <div>
          <ColumnTitle>Newsletter</ColumnTitle>
          <Text $size="sm">
            Get lineup drops, ticket windows, and recap exclusives.
          </Text>
          <NewsletterForm onSubmit={(event) => event.preventDefault()}>
            <NewsletterInput
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              aria-label="Email address for newsletter"
              required
            />
            <Button to="/contact" variant="primary" size="small">
              Subscribe
            </Button>
          </NewsletterForm>
        </div>
      </FooterGrid>

      <FooterBottom>
        <Text $size="xs" $mono>
          © {year} World Star Records. All rights reserved.
        </Text>
        <Text $size="xs" $mono>
          Developed by Eazworld.
        </Text>
      </FooterBottom>
    </StyledFooter>
  );
}

export default Footer;
