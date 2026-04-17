const breakpoints = {
  sm: 640,
  md: 886,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const mediaMax = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `(max-width: ${value}px)`,
  ]),
);

const mediaMin = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [
    key,
    `(min-width: ${value}px)`,
  ]),
);

export const theme = {
  colors: {
    bgBase: '#080810',
    bgElevated: '#121226',
    bgSurface: 'rgba(18, 18, 38, 0.72)',
    bgGlass: 'rgba(18, 18, 38, 0.56)',
    primary: '#7c3aed',
    primaryBright: '#a855f7',
    accent: '#ec4899',
    textStrong: '#ffffff',
    textBody: '#d1d5db',
    textMuted: '#9ca3af',
    borderSoft: 'rgba(255, 255, 255, 0.14)',
    borderStrong: 'rgba(168, 85, 247, 0.42)',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    social: {
      facebook: '#3b5998',
      twitter: '#1da1f2',
      youtube: '#cd201f',
      tiktok: '#00f2ea',
      instagram: '#d62976',
      whatsapp: '#25d366',
      soundcloud: '#ff8800',
      spotify: '#1db954',
    },
  },
  gradients: {
    primary: 'linear-gradient(120deg, #7c3aed 0%, #a855f7 100%)',
    accent: 'linear-gradient(120deg, #ec4899 0%, #a855f7 100%)',
    glow: 'radial-gradient(circle at 20% 0%, rgba(168, 85, 247, 0.3), transparent 45%), radial-gradient(circle at 80% 100%, rgba(236, 72, 153, 0.24), transparent 40%)',
  },
  typography: {
    fontFamily: {
      body: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
      display: "'Passion One', 'Inter', system-ui, sans-serif",
      mono: "'Space Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
    },
    fontSize: {
      xs: 'clamp(0.75rem, 0.72rem + 0.2vw, 0.875rem)',
      sm: 'clamp(0.875rem, 0.84rem + 0.2vw, 1rem)',
      md: 'clamp(1rem, 0.95rem + 0.3vw, 1.125rem)',
      lg: 'clamp(1.125rem, 1.05rem + 0.45vw, 1.35rem)',
      xl: 'clamp(1.35rem, 1.1rem + 1vw, 1.85rem)',
      '2xl': 'clamp(1.8rem, 1.25rem + 2vw, 2.8rem)',
      '3xl': 'clamp(2.4rem, 1.7rem + 3.4vw, 4.5rem)',
      hero: 'clamp(3rem, 8vw, 7rem)',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    lineHeight: {
      tight: 1.1,
      heading: 1.2,
      body: 1.6,
      relaxed: 1.8,
    },
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    12: '48px',
    16: '64px',
    24: '96px',
    32: '128px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px',
    full: '999px',
  },
  shadows: {
    sm: '0 8px 20px rgba(124, 58, 237, 0.16)',
    md: '0 18px 36px rgba(124, 58, 237, 0.2)',
    lg: '0 28px 62px rgba(124, 58, 237, 0.26)',
    purpleGlow: '0 0 30px rgba(124, 58, 237, 0.42)',
    pinkGlow: '0 0 26px rgba(236, 72, 153, 0.38)',
  },
  motion: {
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: {
      fast: '180ms',
      normal: '280ms',
      slow: '420ms',
    },
  },
  layout: {
    containerMaxWidth: '1200px',
    contentMaxWidth: '1440px',
  },
  breakpoints,
  mediaMax,
  mediaMin,
};

export default theme;
