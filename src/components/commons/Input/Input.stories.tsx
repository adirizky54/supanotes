import type { Meta, StoryFn } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { HiOutlineUser } from "solid-icons/hi";

import { Input } from "./Input";


// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component: 'A basic widget for getting the user input is a text field',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    status: {
      control: 'select',
      options: ['warning', 'success', 'error'],
      description: 'Set validation status',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'default', 'large'],
      defaultValue: 'default',
      description: 'Input size',
      table: {
        defaultValue: { summary: 'default' },
      }
    },
    disabled: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Disabled state of input',
      table: {
        defaultValue: { summary: false }
      }
    },
  },
} as Meta<ComponentProps<typeof Input>>;

const Template = ((args) => <Input {...args} />) as StoryFn<ComponentProps<typeof Input>>;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Input Text'
};

export const InputWithStatus = Template.bind({});
InputWithStatus.args = {
  placeholder: 'Input Text',
  status: 'error'
};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  placeholder: 'Enter username',
  leftIcon: <HiOutlineUser />
};
