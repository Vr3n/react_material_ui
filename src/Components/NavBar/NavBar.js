import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useTheme } from '@material-ui/core/styles';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: "space-around",
  }
}));


const NavBar = props => {
  const { history } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const newPage = (url) => {
    history.push(url);
  }

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/'
    },
    {
      menuTitle: 'About',
      pageURL: '/about'
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact'
    }
  ]

  const handleMenuClick = (newPageUrl) => {
    newPage(newPageUrl);
    console.log('clicked');
  }

  const handleButtonClick = (newPageUrl) => {
    newPage(newPageUrl);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {isMobile ?
            (<div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => <MenuItem onClick={() => handleMenuClick(menuItem.pageURL)}>{menuItem.menuTitle}</MenuItem>)}
              </Menu>
          </div>) :
              (<div className={classes.headerOptions}>
                {menuItems.map((menuItem) => <Button key={menuItem.menuTitle} onClick={() => handleButtonClick(menuItem.pageURL)} variant="contained">{menuItem.menuTitle}</Button>)}
              </div>)
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
