const { twPreset } = require('@landing-jobs/neon')

module.exports = {
  content: ['./stories/**/*.stories.tsx', '../../node_modules/@landing-jobs/neon-react/dist/**/*.js'],
  presets: [twPreset],
}
