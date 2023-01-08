import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Alert } from "./Alert";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Alert',
  parameters: {
    docs: {
      description: {
        component: 'Alert component for feedback.',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    title: {
      control: 'text',
      description: 'Alert title',
    },
    variant: {
      control: 'inline-radio',
      options: ['filled', 'light'],
      defaultValue: 'filled',
      description: 'Controls Alert background, color and border styles, defaults to filled',
      table: {
        defaultValue: { summary: 'filled' },
      }
    },
    status: {
      control: 'select',
      options: ['info', 'warning', 'success', 'danger'],
      defaultValue: 'info',
      description: 'Color Alert',
      table: {
        defaultValue: { summary: 'info' },
      }
    },
    showIcon: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Icon displayed next to title',
      table: {
        defaultValue: { summary: false }
      }
    },
    closable: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'True to display close button',
      table: {
        defaultValue: { summary: false }
      }
    },
  },
} as Meta<ComponentProps<typeof Alert>>;

const Template = ((args) => <Alert {...args} />) as StoryFn<ComponentProps<typeof Alert>>;

export const Basic = Template.bind({});
Basic.args = {
  title: 'This is Title',
  children: 'Info alert! Change a few things up and try submitting again.',
  variant: 'light',
};

export const ClosableAlert = Template.bind({});
ClosableAlert.args = {
  title: 'This is Title',
  children: 'Info alert! Change a few things up and try submitting again.',
  variant: 'light',
  closable: true,
};

export const AlertWithIcon = Template.bind({});
AlertWithIcon.args = {
  title: 'This is Title',
  children: 'Info alert! Change a few things up and try submitting again.',
  variant: 'light',
  showIcon: true,
};