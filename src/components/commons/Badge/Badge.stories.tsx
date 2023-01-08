import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Badge } from "./Badge";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component: 'Badge for categorizing or markup.',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['filled', 'light'],
      defaultValue: 'filled',
      description: 'Controls Badge background, color and border styles, defaults to filled',
      table: {
        defaultValue: { summary: 'filled' },
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'info', 'warning', 'success', 'danger'],
      defaultValue: 'primary',
      description: 'Color Badge',
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
    uppercase: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Set text-transform to uppercase',
      table: {
        defaultValue: { summary: false }
      }
    },
  },
} as Meta<ComponentProps<typeof Badge>>;

const Template = ((args) => <Badge {...args} />) as StoryFn<ComponentProps<typeof Badge>>;

export const Default = Template.bind({});
Default.storyName = 'Badge';
Default.args = {
  children: 'Badge',
  color: 'primary',
  variant: 'filled'
};
