import React, { useState, useCallback } from 'react';
import { Box, Divider, IconButton, Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import ShortlyTitle from '../assets/images/logo.svg';
import MenuIcon from '../assets/images/icon-menu.png';

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const navBarRef = React.useRef<HTMLDivElement>(null);

  const handleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(navBarRef.current);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <NavBar>
      <Box pr={6}>
        <img src={ShortlyTitle} alt="Shortly Logo"/>
      </Box>
      <NavBarMenuDesktop ref={navBarRef}>
        <Box display="flex">
          <Box pr={4} lineHeight={2.5}>
            Features
          </Box>
          <Box pr={4} lineHeight={2.5}>
            Pricing
          </Box>
          <Box pr={4} lineHeight={2.5}>
            Resources
          </Box>
        </Box>

        <Box display="flex">
          <Box pr={4} lineHeight={2.5}>
            Login
          </Box>
          <SignUpButton>
            Sign Up
          </SignUpButton>
        </Box>
      </NavBarMenuDesktop>

      <NavBarMenuMobile>
        <IconButton onClick={handleMenu}>
          <img src={MenuIcon} alt="menu"></img>
        </IconButton>
        <MenuMobile
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
          open={isOpen}
          onClose={handleClose}
        >
          <MenuItemMobile onClick={handleClose}>Features</MenuItemMobile>
          <MenuItem onClick={handleClose}>Pricing</MenuItem>
          <MenuItem onClick={handleClose}>Resources</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>
            <SignUpButton>Sign Up</SignUpButton>
          </MenuItem>
        </MenuMobile>
      </NavBarMenuMobile>
    </NavBar>
  )
}

export default Navbar;

const NavBar = styled(Box)`
  display: flex;
  align-items: center;
  padding: 40px 160px;
  color: hsl(0, 0%, 70%);
  font-weight: 700;
  font-size: 15px;

  @media (max-width: 1037px) {
    padding: 20px 10px;
  }

  @media (max-width: 799px) {
  }
`

const NavBarMenuDesktop = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 0px 0;
  color: hsl(0, 0%, 70%);
  font-weight: 700;
  font-size: 15px;

  @media (max-width: 799px) {
    display: none;
  }
`

const NavBarMenuMobile = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 800px) {
    display: none;
  }
`

const MenuMobile = styled(Menu)`
  display: flex;
  justify-content: center;

  .MuiPopover-paper {
    position: relative;
    background: hsl(257,27%,26%);
    color: white;
    width: 90%;
    height: 385px;
    top: 100px !important;
    left: 0 !important;
    border-radius: 10px;

    .MuiMenuItem-root {
      min-height: 70px;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;

      .MuiBox-root {
        padding: 0 30%;
        text-align: center;
      }
    }

    .MuiDivider-root {
      border: none;
      height: 1px;
      width: 75%;
      margin: auto;
      flex-shrink: 0;
      background-color: rgb(173 181 189);
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`

const MenuItemMobile = styled(MenuItem)`
  .MuiMenuItem-root {
  }
`

const SignUpButton = styled(Box)`
  background: hsl(180, 66%, 49%);
  width: 100px;
  color: white;
  border-radius: 50px;
  line-height: 2.5;

  &:hover {
    background: hsl(180, 66%, 74%);
  }
`