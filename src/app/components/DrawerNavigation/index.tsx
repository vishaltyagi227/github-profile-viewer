import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ROUTE, PROTECTED_ROUTE, ORIGIN } from '@constant/index';
import INavbar from '@containers/Navbar/type';
import Link from '@components/Link';
import Button from '@components/Button';
import useStyles from './style';

const DrawerNavigation = ({ isLogged, handleClick }: INavbar) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton className={classes.hamburger} onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor={ORIGIN.right} open={open} onClose={handleDrawerClose}>
        <>
          <Box onClick={handleDrawerClose} className={classes.wrapper}>
            <List>
              <ListItem className={classes.navItem}>
                <Link
                  btn
                  component={NavLink}
                  to={ROUTE.Home}
                  activeClassName={classes.active}
                  className={classes.navLink}
                  exact
                >
                  Search
                </Link>
              </ListItem>
              {isLogged && (
                <>
                  <ListItem className={classes.navItem}>
                    <Link
                      btn
                      component={NavLink}
                      to={PROTECTED_ROUTE.Follow}
                      activeClassName={classes.active}
                      className={classes.navLink}
                      exact
                    >
                      who to Follow
                    </Link>
                  </ListItem>
                  <ListItem className={classes.navItem}>
                    <Link
                      btn
                      component={NavLink}
                      to={PROTECTED_ROUTE.Profile}
                      activeClassName={classes.active}
                      className={classes.navLink}
                      exact
                    >
                      Profile
                    </Link>
                  </ListItem>
                </>
              )}
              {isLogged ? (
                <>
                  <ListItem className={classes.navItem}>
                    <Button onClick={handleClick} className={classes.navLink}>
                      Logout
                    </Button>
                  </ListItem>
                </>
              ) : (
                <>
                  <ListItem className={classes.navItem}>
                    <Link
                      btn
                      component={NavLink}
                      to={ROUTE.Login}
                      activeClassName={classes.active}
                      className={classes.navLink}
                      exact
                    >
                      Login
                    </Link>
                  </ListItem>
                </>
              )}
            </List>
          </Box>
        </>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
