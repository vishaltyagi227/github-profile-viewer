import React from 'react';
import { Story, Meta } from '@storybook/react';
import NotFound from '@components/NotFound';

export default {
  title: 'Components/NotFound',
  component: NotFound,
} as Meta;

const Template: Story = () => <NotFound />;

export const Basic = Template.bind({});
