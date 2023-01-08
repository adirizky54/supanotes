import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'Render button. It accepts all props which native buttons support.',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'filled', 'light', 'outline', 'subtle'],
      defaultValue: 'default',
      description: 'Button appearance',
      table: {
        defaultValue: { summary: 'default' },
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'info', 'warning', 'success', 'danger'],
      description: 'Button color',
    },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
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
    disabled: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Disabled state of button',
      table: {
        defaultValue: { summary: false }
      }
    },
    block: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Sets button width to 100% of parent element',
      table: {
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Set the loading status of button',
      table: {
        defaultValue: { summary: false }
      }
    },
  },
} as Meta<ComponentProps<typeof Button>>;

const Template = ((args) => <Button {...args} />) as StoryFn<ComponentProps<typeof Button>>;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
};
Basic.parameters = {
  docs: {
    source: {
      code: '<Button>Button</Button>',
      language: "jsx",
      type: "code",
      format: true,
    },
  },
};
