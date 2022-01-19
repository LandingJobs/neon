const { twPreset } = require('@landing-jobs/neon')

module.exports = {
  content: ['./stories/**/*.stories.tsx', './src/**/*.tsx'],
  presets: [twPreset],
}
