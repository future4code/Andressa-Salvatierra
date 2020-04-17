import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from "react-redux";
import LogoImage from '../../img/futureTube.PNG'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { push } from 'connected-react-router';
import { routes } from '../Router/index';

const StyledLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const [userLogged, setUserLogged] = React.useState(null)


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkIfUserIsLoggedIn = () => {
    const token = window.localStorage.getItem("token")
    if (!token) {
      setUserLogged(false)
    } else {
      setUserLogged(true)
    }
  }

  useEffect(() => {
    checkIfUserIsLoggedIn()
  }, [])
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <StyledLogo src={LogoImage}></StyledLogo>
          <Typography color="secondary" variant="h6" className={classes.title}>
            {props.text}
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="secondary"
            >
              <AccountCircle style={{ fontSize: 50 }}/>
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
              onClose={handleClose}
            >
              {userLogged ? 
              <div>
                <MenuItem onClick={props.goToHome}>Home</MenuItem>
                <MenuItem onClick={props.goToUserVideos}>User Videos</MenuItem>
                <MenuItem onClick={props.goToUploadVideo}>Upload Video</MenuItem>
                <MenuItem onClick={props.goToChangePassword}>Change Password</MenuItem>
              </div>
              : <Button>Log in</Button>
            }
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(push(routes.home)),
  goToUserVideos: () => dispatch(push(routes.userVideos)),
  goToUploadVideo: () => dispatch(push(routes.uploadVideo)),
  goToChangePassword: () => dispatch(push(routes.changePassword))
})

export default connect(null, mapDispatchToProps)(MenuAppBar);