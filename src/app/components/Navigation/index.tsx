import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTE, PROTECTED_ROUTE } from '@constant/index';
import INavbar from '@containers/Navbar/type';
import Link from '@components/Link';
import Button from '@components/Button';
import useStyles from './style';

const Navigation = ({ isLogged, handleClick }: INavbar) => {
  const classes = useStyles();

  return (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link
            btn
            component={NavLink}
            to={ROUTE.Home}
            activeClassName={classes.active}
            exact
            className={classes.navLink}
          >
            Search
          </Link>
        </li>
        {isLogged && (
          <>
            <li className={classes.navItem}>
              <Link
                btn
                component={NavLink}
                to={PROTECTED_ROUTE.Follow}
                activeClassName={classes.active}
                exact
                className={classes.navLink}
              >
                Who to Follow
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                btn
                component={NavLink}
                to={PROTECTED_ROUTE.Profile}
                activeClassName={classes.active}
                exact
                className={classes.navLink}
              >
                Profile
              </Link>
            </li>
          </>
        )}
        {isLogged ? (
          <>
            <li className={classes.navItem}>
              <Button className={classes.navLink} onClick={handleClick}>
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className={classes.navItem}>
              <Link
                btn
                component={NavLink}
                to={ROUTE.Login}
                activeClassName={classes.active}
                exact
                className={classes.navLink}
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
