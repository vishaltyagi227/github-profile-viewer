import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Avatar,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { ROUTE, VARIANT, COMPONENT } from '@constant/index';
import Link from '@components/Link';
import useStyles from './style';
import { ISuggestionCard } from './type';

const SuggestionCard = ({
  userName,
  imageUrl,
  closeBtn,
  onClose,
}: ISuggestionCard) => {
  const classes = useStyles();

  return (
    <Card className={classes.suggestionCard}>
      <Avatar src={imageUrl} alt={userName} className={classes.cardAvatar} />
      <CardContent>
        <Typography gutterBottom variant={VARIANT.h5} component={COMPONENT.div}>
          {userName}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link
          component={RouterLink}
          to={`${ROUTE.ArbitraryUser}${userName}`}
          className={classes.cardLink}
        >
          View
        </Link>
        {closeBtn && (
          <IconButton
            className={classes.closeBtn}
            onClick={() => onClose && onClose(userName)}
          >
            <Close />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
SuggestionCard.defaultProps = {
  closeBtn: false,
};
export default SuggestionCard;
