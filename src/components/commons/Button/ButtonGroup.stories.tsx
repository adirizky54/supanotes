import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
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
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'info', 'warning', 'success', 'danger'],
      description: 'Button color',
    },
  },
} as Meta<ComponentProps<typeof ButtonGroup>>;

const Template = ((args) => (
  <ButtonGroup {...args}>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
)) as StoryFn<ComponentProps<typeof ButtonGroup>>;

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.storyName = 'Button Group';
DefaultButtonGroup.args = {
  variant: 'default',
  size: 'md',
};
DefaultButtonGroup.parameters = {
  docs: {
    source: {
      code: `<ButtonGroup size="md">
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>`,
      language: "jsx",
      type: "code",
      format: true,
    },
  },
};