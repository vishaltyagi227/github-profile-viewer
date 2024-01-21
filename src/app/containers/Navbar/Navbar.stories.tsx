import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';
import Navbar from '@containers/Navbar';
import INavbar from '@containers/Navbar/type';

export default {
  title: 'Containers/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<INavbar> = ({ ...args }) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  isLogged: true,
};

export const LoggedOut = Template.bind({});

LoggedOut.args = {
  isLogged: false,
};
