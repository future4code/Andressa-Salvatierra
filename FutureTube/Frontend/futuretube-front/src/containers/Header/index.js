import React from "react";
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components"

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

function Header() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Futuretube
            </Typography>
          <SearchContainer>
            <div>
              <SearchIcon />
            </div>
            <InputBase

              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect()(Header);

