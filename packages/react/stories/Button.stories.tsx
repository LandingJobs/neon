import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src'

export * from './ButtonLink.stories'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Press here',
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})
Filled.args = {
  variant: 'primary',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'primary',
  outline: true,
}
