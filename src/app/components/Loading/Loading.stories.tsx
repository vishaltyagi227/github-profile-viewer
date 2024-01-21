import React from 'react';
import { Story, Meta } from '@storybook/react';
import Loading from '@components/Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: Story = () => <Loading />;

export const Basic = Template.bind({});
