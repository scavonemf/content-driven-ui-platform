import type { Preview } from '@storybook/nextjs-vite';
// Suppress TypeScript error for side-effect CSS import when no type declarations are present
// @ts-expect-error -- side-effect CSS import may lack type declarations
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
