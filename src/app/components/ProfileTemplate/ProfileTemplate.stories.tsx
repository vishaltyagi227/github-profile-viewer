import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProfileTemplate from '@components/ProfileTemplate';
import { IProfile } from '@containers/Profile/type';

export default {
  title: 'Components/ProfileTemplate',
  component: ProfileTemplate,
} as Meta;

const Template: Story<IProfile> = ({ ...args }) => (
  <ProfileTemplate {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  userDetails: {
    userName: 'vishalTyagi',
    followers: 0,
    following: 0,
    bio: 'FrontEnd Intern',
    email: null,
    location: '',
    url: '',
  },
};
