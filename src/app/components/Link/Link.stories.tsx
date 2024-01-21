import React from 'react';
import { Story, Meta } from '@storybook/react';
import Link from '@components/Link';
import { ILink } from '@components/Link/type';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<ILink> = ({ ...args }) => <Link {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  btn: false,
  children: 'Link',
};

export const Button = Template.bind({});

Button.args = {
  btn: true,
  children: 'Button style link',
};
