import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

import theme from './theme.json';

const generateThemeFromJson = (json: any) => {
  const output: any = {};
  Object.keys(json).forEach((key) => {
    output[key] = json[key].DEFAULT;
    Object.keys(json[key]).forEach((subKey) => {
      output[`${key}-${subKey}`] = json[key][subKey];
    });
  });
  return output;
};

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          ...generateThemeFromJson(theme),
          background: '#f1f5f9',
          surface: '#ffffff',
          'surface-variant': '#e2e8f0',
          'on-background': '#1e293b',
          'on-surface': '#1e293b',
          'on-surface-variant': '#475569',
          'on-primary': '#ffffff',
          'on-secondary': '#1e293b'
        }
      }
    }
  }
});
