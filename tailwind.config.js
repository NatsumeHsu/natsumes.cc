import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

import theme from './theme.json';

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        neutral: theme.neutral,
        secondary: theme.secondary,
        primary: theme.primary
      }
    }
  }
};
