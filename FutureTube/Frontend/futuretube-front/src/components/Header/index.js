import React from 'react';
import styled from 'styled-components'
import LogoImage from "../../img/futureTube.PNG"
import Menu from "../Menu"

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: #422D8F;
  position: fixed;
  
`

const MenuContainer = styled.div`
  display: flex;
  padding-top: 20px;
`

const Logo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 25px;
  margin: 0 auto;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} />
      <MenuContainer>
        <Menu/>
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header
