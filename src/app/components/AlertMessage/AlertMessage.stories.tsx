import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '@components/Button';
import AlertMessage from '@components/AlertMessage';
import { IAlertMessage } from '@components/AlertMessage/type';

export default {
  title: 'Components/AlertMessage',
  component: AlertMessage,
} as Meta;

const Template: Story<IAlertMessage> = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        variant="contained"
        disabled={open}
        onClick={() => {
          setOpen((preState) => !preState);
        }}
      >
        Open Alert
      </Button>
      <AlertMessage
        {...{
          ...args,
          open,
          handleClick: () => {
            setOpen((preState) => !preState);
          },
        }}
      />
    </>
  );
};

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
  alertType: 'success',
  message: 'Alert Message',
};

export const Snackbar = Template.bind({});
Snackbar.args = {
  type: 'autohide',
  alertType: 'success',
  message: 'Alert Message',
};
