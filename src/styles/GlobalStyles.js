import { createGlobalStyle } from 'styled-components';
import { devicesMax } from './BreakPoint';

const GlobalStyles = createGlobalStyle`:root {



--color-primary-900:#084b7e;
--color-primary-800:#09558e;
--color-primary-700:#0a5e9e;
--color-primary-600:#0b68ae;
--color-primary-500:#0c71be;
--color-primary-400:#0d7bce;
--color-primary-300:#0e84de;
--color-primary-200:#0f8eee;
--color-primary-100:#1d95f1;


--color-white-100:#ffffff;
--color-black-900: #000000;

  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* --color-facebook-900: #3b5998;
  --color-twitter-900:#1DA1F2;
  --color-youtube-900:#CD201F;
  --color-tiktok-900:#00f2ea;

  --color-facebook-500: #4060a4;
  --color-twitter-500:#6DC2F7;
  --color-youtube-500:#EB7978;
  --color-tiktok-500:#7bfffb; */

  --color-facebook-900: #3b5998;
  --color-twitter-900:#1DA1F2;
  --color-youtube-900:#CD201F;
  --color-tiktok-900:#00f2ea;
  --color-instragram-900:#d62976;
  --color-whatsapp-900:#25d366;

  --color-facebook-500: #4060a4;
  --color-twitter-500:#8ED0F8;
  --color-youtube-500:#EB7978;
  --color-tiktok-500:#7bfffb;
  --color-instragram-500:#e470a4;
  --color-whatsapp-500:#68e597;
  --color-gold-900: #FFD700;



  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --shadow-sm: 0 2px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--shadow-xl: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}
html {
  font-size: 62.5%;

  @media ${devicesMax.lg}{
    font-size: 55%;

  }
  @media ${devicesMax.md}{
    font-size: 50%;
  }
  @media ${devicesMax.sm}{
    font-size: 45%;

  }

}
body {
  font-family: "Poppins", sans-serif;
  /* color: var(--color-primary-900); */

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  width: 100vw;


}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}


button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* select:disabled,
input:disabled {
} */

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
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
}

img {
  max-width: 100%;

  /* For dark mode */
  /* filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity)); */
}
`;

export default GlobalStyles;
