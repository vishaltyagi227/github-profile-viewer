import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import DrawerNavigation from '@components/DrawerNavigation';
import useStyles from './style';
import INavbar from './type';

const Navbar = ({ isLogged, handleClick }: INavbar) => {
  const classes = useStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.values.md)
  );

  return (
    <>
      <AppBar className={classes.header}>
        <Container className={classes.navContainer}>
          <Toolbar className={classes.nav}>
            <Logo />
            {isMobile ? (
              <DrawerNavigation isLogged={isLogged} handleClick={handleClick} />
            ) : (
              <Navigation isLogged={isLogged} handleClick={handleClick} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
