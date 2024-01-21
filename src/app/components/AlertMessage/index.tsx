import React from 'react';
import { Collapse, Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { SIZE, ORIGIN } from '@constant/index';
import useStyles from './style';
import { IAlertMessage } from './type';
import { ALERT, AUTO_HIDE, ALERT_DURATION } from './constant';

const AlertMessage = ({
  open,
  alertType,
  message,
  handleClick,
  type,
}: IAlertMessage) => {
  const classes = useStyles();

  if (type === AUTO_HIDE) {
    return (
      <>
        <Snackbar
          open={open}
          autoHideDuration={ALERT_DURATION}
          onClose={handleClick}
          anchorOrigin={{ vertical: ORIGIN.bottom, horizontal: ORIGIN.right }}
        >
          <Alert onClose={handleClick} severity={alertType}>
            {message}
          </Alert>
        </Snackbar>
      </>
    );
  }

  return (
    <>
      <Collapse in={open} className={classes.alertWrapper}>
        <Alert
          severity={alertType}
          action={
            handleClick && (
              <IconButton
                className={classes.closeIcon}
                size={SIZE.small}
                onClick={handleClick}
              >
                <CloseIcon fontSize={SIZE.inherit} />
              </IconButton>
            )
          }
          className={classes.alert}
        >
          {message}
        </Alert>
      </Collapse>
    </>
  );
};

AlertMessage.defaultProps = {
  type: ALERT,
};

export default AlertMessage;
