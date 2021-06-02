import { Box } from '@material-ui/core';
import styled from 'styled-components';
import ShortlyTitle from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <NavBar>
      <Box display="flex">
        <Box pr={6}>
          <img src={ShortlyTitle} alt="Shortly Logo"/>
        </Box>
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
    </NavBar>
  )
}

export default Navbar;

const NavBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 40px 160px;
  color: hsl(0, 0%, 70%);
  font-weight: 700;
  font-size: 15px;
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