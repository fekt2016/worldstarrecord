import { createGlobalStyle } from "styled-components";
import { devicesMax } from "./BreakPoint";

const GlobalStyles = createGlobalStyle`
:root {
  /* Updated Music-Themed Color Palette */
  --color-primary-900: #0f0c29;
  --color-primary-800: #1a1661;
  --color-primary-700: #231e8f;
  --color-primary-600: #2d26bd;
  --color-primary-500: #3d35e6;
  --color-primary-400: #635cff;
  --color-primary-300: #8a84ff;
  --color-primary-200: #b1adff;
  --color-primary-100: #d8d6ff;

  --color-accent-1: #ff00cc;
  --color-accent-2: #3333ff;
  --color-accent-3: #ff8a00;
  
  --color-white-100: #ffffff;
  --color-white-200: #f8f7ff;
  --color-black-900: #000000;
  --color-black-800: #0a0818;

  /* Updated Greyscale with Purple Undertones */
  --color-grey-50: #f9f8ff;
  --color-grey-100: #f0edff;
  --color-grey-200: #e0dcff;
  --color-grey-300: #cbc5ff;
  --color-grey-400: #a69eff;
  --color-grey-500: #8177ff;
  --color-grey-600: #5c4eff;
  --color-grey-700: #3d2eff;
  --color-grey-800: #1f0eff;
  --color-grey-900: #0a00cc;

  /* Social Media Colors */
  --color-facebook-900: #3b5998;
  --color-twitter-900: #1DA1F2;
  --color-youtube-900: #CD201F;
  --color-tiktok-900: #00f2ea;
  --color-instragram-900: #d62976;
  --color-whatsapp-900: #25d366;
  --color-soundcloud-900: #ff8800;
  --color-spotify-900: #1DB954;

  --color-facebook-500: #4060a4;
  --color-twitter-500: #8ED0F8;
  --color-youtube-500: #EB7978;
  --color-tiktok-500: #7bfffb;
  --color-instragram-500: #e470a4;
  --color-whatsapp-500: #68e597;
  --color-soundcloud-500: #ffaa44;
  --color-spotify-500: #4ade80;
  
  --color-gold-900: #FFD700;

  /* Border Radii */
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --border-radius-xl: 15px;
  --border-radius-full: 999px;

  /* Shadows - More Vibrant with Color Accents */
  --shadow-sm: 0 2px 8px rgba(51, 51, 255, 0.2);
  --shadow-md: 0px 0.6rem 2.4rem rgba(255, 0, 204, 0.25);
  --shadow-lg: 0 2.4rem 3.2rem rgba(61, 53, 230, 0.3);
  --shadow-xl: 0 8px 24px rgba(143, 0, 255, 0.35);

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2));
  --gradient-secondary: linear-gradient(135deg, var(--color-primary-700), var(--color-primary-400));
  --gradient-dark: linear-gradient(135deg, var(--color-primary-900), var(--color-black-800));
  
  /* Transitions */
  --transition-all: all 0.3s ease;
  --transition-colors: color 0.3s ease, background-color 0.3s ease;
  --transition-transform: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: var(--transition-colors);
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;

  @media ${devicesMax.lg}{
    font-size: 55%;
  }
  @media ${devicesMax.md}{
    font-size: 50%;
  }
  @media ${devicesMax.sm}{
    font-size: 48%;
  }
}

body {
  font-family: "Poppins", sans-serif;
  background: var(--gradient-dark);
  color: var(--color-white-200);
  min-height: 100vh;
  line-height: 1.6;
  font-size: 1.6rem;
  width: 100vw;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: var(--color-accent-1);
  color: var(--color-white-100);
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--color-primary-400);
  border-radius: var(--border-radius-md);
  padding: 0.8rem 1.2rem;
  transition: var(--transition-all);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(61, 53, 230, 0.4);
    border-color: var(--color-accent-2);
    background: rgba(255, 255, 255, 0.12);
  }
}

button {
  cursor: pointer;
  border: none;
  background: var(--gradient-primary);
  color: white;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  padding: 1rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-all);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -60%;
    width: 20px;
    height: 200%;
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(25deg);
    transition: all 0.6s;
  }
  
  &:hover::after {
    left: 120%;
  }
}

*:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

button:has(svg) {
  line-height: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

a {
  color: var(--color-primary-300);
  text-decoration: none;
  transition: var(--transition-colors);
  
  &:hover {
    color: var(--color-white-100);
    text-decoration: underline;
  }
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

h1, h2, h3, h4 {
  font-weight: 800;
  letter-spacing: -0.5px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

h1 {
  font-size: 5.5rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2.5rem;
}

img {
  max-width: 100%;
  border-radius: var(--border-radius-md);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-primary-900);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--border-radius-full);
  border: 2px solid var(--color-primary-900);
}

/* Animation Classes */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-pulse {
  animation: pulse 3s infinite ease-in-out;
}

.animate-float {
  animation: float 5s infinite ease-in-out;
}

/* Utility Classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.text-center {
  text-align: center;
}

.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.bg-gradient {
  background: var(--gradient-primary);
}

.section-padding {
  padding: 8rem 0;
  
  @media ${devicesMax.md} {
    padding: 6rem 0;
  }
}
`;

export default GlobalStyles;
