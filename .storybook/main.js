module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    // '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs/react/preset',
  ],
}
