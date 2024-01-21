import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActions,
} from '@mui/material';
import { Email, LocationOn, People } from '@mui/icons-material';

import {
  EMAIL_NOT_FOUND,
  LOCATION_NOT_FOUND,
  RELATION,
  TARGET,
  VARIANT,
} from '@constant/index';
import { IProfile } from '@containers/Profile/type';
import Link from '@components/Link';
import useStyles from './style';

const ProfileTemplate = ({ userDetails }: IProfile) => {
  const classes = useStyles();

  const {
    userName,
    avatarUrl,
    followers,
    following,
    bio,
    email,
    location,
    url,
    blog,
  } = userDetails;

  return (
    <Card className={classes.profileContent}>
      <div className={classes.avtarWrapper}>
        <Avatar alt={userName} src={avatarUrl} className={classes.avatar} />
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant={VARIANT.h4}
          className={classes.userName}
        >
          {userName}
        </Typography>
        <Typography variant={VARIANT.subtitle1} className={classes.bio}>
          {bio}
        </Typography>
        <div className={classes.infoWrapper}>
          <div>
            <Typography className={classes.info}>
              <People className={classes.icon} /> Followers {followers}
            </Typography>
            <Typography className={classes.info}>
              <People className={classes.icon} /> Following {following}
            </Typography>
          </div>
          <div>
            <Typography className={classes.info}>
              <Email className={classes.icon} />
              {email || EMAIL_NOT_FOUND}
            </Typography>
            <Typography className={classes.info}>
              <LocationOn className={classes.icon} />
              {location || LOCATION_NOT_FOUND}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Link
          btn
          rel={RELATION.noopener}
          href={url}
          className={classes.profileBtn}
          target={TARGET.newTab}
        >
          Github Profile
        </Link>
        {blog && (
          <Link
            btn
            rel={RELATION.noopener}
            href={blog}
            className={classes.profileBtn}
            target={TARGET.newTab}
          >
            Blog
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default ProfileTemplate;
