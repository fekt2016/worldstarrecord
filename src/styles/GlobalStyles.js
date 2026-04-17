import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: dark;

    --color-bg-base: ${({ theme }) => theme.colors.bgBase};
    --color-bg-elevated: ${({ theme }) => theme.colors.bgElevated};
    --color-bg-surface: ${({ theme }) => theme.colors.bgSurface};
    --color-bg-glass: ${({ theme }) => theme.colors.bgGlass};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-bright: ${({ theme }) => theme.colors.primaryBright};
    --color-accent: ${({ theme }) => theme.colors.accent};
    --color-text-strong: ${({ theme }) => theme.colors.textStrong};
    --color-text-body: ${({ theme }) => theme.colors.textBody};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-border-soft: ${({ theme }) => theme.colors.borderSoft};
    --color-border-strong: ${({ theme }) => theme.colors.borderStrong};

    --font-body: ${({ theme }) => theme.typography.fontFamily.body};
    --font-display: ${({ theme }) => theme.typography.fontFamily.display};
    --font-mono: ${({ theme }) => theme.typography.fontFamily.mono};
    --fs-xs: ${({ theme }) => theme.typography.fontSize.xs};
    --fs-sm: ${({ theme }) => theme.typography.fontSize.sm};
    --fs-md: ${({ theme }) => theme.typography.fontSize.md};
    --fs-lg: ${({ theme }) => theme.typography.fontSize.lg};
    --fs-xl: ${({ theme }) => theme.typography.fontSize.xl};
    --fs-2xl: ${({ theme }) => theme.typography.fontSize['2xl']};
    --fs-3xl: ${({ theme }) => theme.typography.fontSize['3xl']};
    --fs-hero: ${({ theme }) => theme.typography.fontSize.hero};

    --space-1: ${({ theme }) => theme.space[1]};
    --space-2: ${({ theme }) => theme.space[2]};
    --space-3: ${({ theme }) => theme.space[3]};
    --space-4: ${({ theme }) => theme.space[4]};
    --space-6: ${({ theme }) => theme.space[6]};
    --space-8: ${({ theme }) => theme.space[8]};
    --space-12: ${({ theme }) => theme.space[12]};
    --space-16: ${({ theme }) => theme.space[16]};
    --space-24: ${({ theme }) => theme.space[24]};
    --space-32: ${({ theme }) => theme.space[32]};

    --radius-sm: ${({ theme }) => theme.radius.sm};
    --radius-md: ${({ theme }) => theme.radius.md};
    --radius-lg: ${({ theme }) => theme.radius.lg};
    --radius-xl: ${({ theme }) => theme.radius.xl};
    --radius-xxl: ${({ theme }) => theme.radius.xxl};
    --radius-full: ${({ theme }) => theme.radius.full};

    --shadow-sm: ${({ theme }) => theme.shadows.sm};
    --shadow-md: ${({ theme }) => theme.shadows.md};
    --shadow-lg: ${({ theme }) => theme.shadows.lg};
    --shadow-purple-glow: ${({ theme }) => theme.shadows.purpleGlow};
    --shadow-pink-glow: ${({ theme }) => theme.shadows.pinkGlow};

    --gradient-primary: ${({ theme }) => theme.gradients.primary};
    --gradient-accent: ${({ theme }) => theme.gradients.accent};
    --gradient-glow: ${({ theme }) => theme.gradients.glow};
    --transition-spring: ${({ theme }) =>
      `all ${theme.motion.duration.normal} ${theme.motion.spring}`};

    /* Legacy aliases for existing components while refactor is in progress. */
    --color-white-100: ${({ theme }) => theme.colors.textStrong};
    --color-white-200: ${({ theme }) => theme.colors.textBody};
    --color-black-900: ${({ theme }) => theme.colors.bgBase};
    --color-grey-100: rgba(18, 18, 38, 0.72);
    --color-grey-200: #d1d5db;
    --color-grey-300: #9ca3af;
    --color-grey-400: #6b7280;
    --color-grey-500: ${({ theme }) => theme.colors.primaryBright};
    --color-primary-900: ${({ theme }) => theme.colors.bgElevated};
    --color-gold-900: ${({ theme }) => theme.colors.accent};
    --color-facebook-900: ${({ theme }) => theme.colors.social.facebook};
    --color-twitter-900: ${({ theme }) => theme.colors.social.twitter};
    --color-youtube-900: ${({ theme }) => theme.colors.social.youtube};
    --color-tiktok-900: ${({ theme }) => theme.colors.social.tiktok};
    --color-instragram-900: ${({ theme }) => theme.colors.social.instagram};
    --color-whatsapp-900: ${({ theme }) => theme.colors.social.whatsapp};
    --color-soundcloud-900: ${({ theme }) => theme.colors.social.soundcloud};
    --color-spotify-900: ${({ theme }) => theme.colors.social.spotify};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    color: ${({ theme }) => theme.colors.textBody};
    background-color: ${({ theme }) => theme.colors.bgBase};
    background-image: ${({ theme }) => theme.gradients.glow};
    background-attachment: fixed;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.textStrong};
    background: rgba(236, 72, 153, 0.36);
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.textStrong};
    font-family: ${({ theme }) => theme.typography.fontFamily.display};
    line-height: ${({ theme }) => theme.typography.lineHeight.heading};
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  :where(
    a,
    button,
    input,
    textarea,
    select,
    [role='button'],
    [tabindex]:not([tabindex='-1'])
  ):focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    box-shadow: ${({ theme }) => theme.shadows.purpleGlow};
  }

  ::-webkit-scrollbar {
    width: 0.65rem;
    height: 0.65rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgElevated};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.gradients.primary};
    border: 2px solid ${({ theme }) => theme.colors.bgElevated};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
