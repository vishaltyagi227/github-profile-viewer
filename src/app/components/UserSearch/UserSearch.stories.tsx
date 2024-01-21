import React from 'react';
import { Story, Meta } from '@storybook/react';
import UserSearch from '@components/UserSearch';
import { ISearch } from '@components/UserSearch/type';

export default {
  title: 'Components/UserSearch',
  component: UserSearch,
  argTypes: {
    handleChange: { action: 'change' },
  },
} as Meta;

const Template: Story<ISearch> = ({ ...args }) => <UserSearch {...args} />;

export const Basic = Template.bind({});
