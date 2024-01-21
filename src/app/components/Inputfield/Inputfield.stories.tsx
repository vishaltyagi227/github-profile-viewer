import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputField from '@components/Inputfield';
import { IField } from '@components/Inputfield/type';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    value: { control: { disable: true } },
  },
} as Meta;

const Template: Story<IField> = ({ ...args }) => <InputField {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  error: false,
  type: 'text',
  label: 'Name',
  name: 'userName',
  helperText: 'Please enter your name',
};

export const Validation = Template.bind({});

Validation.args = {
  ...Basic.args,
  error: true,
  helperText: 'Name is not valid',
};
