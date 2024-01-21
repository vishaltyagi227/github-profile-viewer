import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';
import SuggestionCard from '@components/SuggestionCard';
import { ISuggestionCard } from '@components/SuggestionCard/type';

export default {
  title: 'Components/SuggestionCard',
  component: SuggestionCard,
} as Meta;

const Template: Story<ISuggestionCard> = ({ ...args }) => (
  <BrowserRouter>
    <SuggestionCard {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});

Basic.argTypes = {
  closeBtn: { control: { disable: true } },
};
Basic.args = {
  userName: 'vishal',
  imageUrl: 'imageUrl.png',
};

export const WithCloseIcon = Template.bind({});

WithCloseIcon.args = {
  ...Basic.args,
  closeBtn: true,
};
