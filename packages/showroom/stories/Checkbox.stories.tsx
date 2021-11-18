import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '@landing-jobs/neon-react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Checked = Template.bind({}) as typeof Template
Checked.decorators = [
  (Story, { args }) => {
    args.defaultChecked = true
    return <Story />
  },
]

export const NotChecked = Template.bind({}) as typeof Template
