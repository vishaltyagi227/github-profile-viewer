import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '@components/Button';
import { IButton } from '@components/Button/type';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButton> = ({ ...args }) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  variant: 'contained',
  type: 'button',
  fullWidth: false,
  disabled: false,
  children: 'Button',
};
