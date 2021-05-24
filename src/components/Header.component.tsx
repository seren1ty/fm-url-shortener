import { Box } from '@material-ui/core';
import WorkingImage from '../assets/images/illustration-working.svg';

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" px={20} py={4}>
      <Box display="flex" flexDirection="column" alignItems="flex-start" flexWrap="wrap" minWidth="550px" maxWidth="50%" pt={8}>
        <Box color="hsl(255, 11%, 22%)" fontWeight={700} fontSize={70} textAlign="left" lineHeight={1.1}>
          More than just shorter links
        </Box>
        <Box color="hsl(0, 0%, 70%)" fontSize={20} lineHeight={1.7} textAlign="left" maxWidth="500px" pb={4}>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </Box>
        <Box bgcolor="hsl(180, 66%, 49%)" width={180} height={50} color="white" borderRadius={50} lineHeight={2.8}>
          Get Started
        </Box>
      </Box>

      <Box display="flex">
        <Box pl={10} mr={-30}>
          <img src={WorkingImage} alt="Working"/>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;