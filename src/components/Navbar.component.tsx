import { Box } from '@material-ui/core';
import ShortlyTitle from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" paddingY={5} color="hsl(0, 0%, 70%)" fontWeight={700} fontSize={15}>
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
        <Box bgcolor="hsl(180, 66%, 49%)" width={100} color="white" borderRadius={50} lineHeight={2.5}>
          Sign Up
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;