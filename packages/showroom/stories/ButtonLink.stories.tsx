import { ComponentStory } from '@storybook/react'

import { ButtonLink } from '@landing-jobs/neon-react'

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />

export const Link = Template.bind({})
Link.args = {
  variant: 'primary',
}
