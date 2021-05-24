import { Box } from '@material-ui/core';
import BoostBackground from '../assets/images/bg-boost-desktop.svg';

const Boost = () => {
  return (
    <Box position="relative" display="flex" flexDirection="column" justifyContent="center" alignItems="center" px={20} pt={10} pb={7}>
      <Box position="absolute" zIndex={-1} bgcolor="hsl(257, 27%, 26%)" height={240} overflow="hidden">
          <img src={BoostBackground} alt="Boost Background"/>
        </Box>
      <Box color="white" fontWeight={700} fontSize={40} textAlign="left" lineHeight={1.1} pb={4}>
        Boost your links today
      </Box>
      <Box bgcolor="hsl(180, 66%, 49%)" width={180} height={50} color="white" borderRadius={50} lineHeight={3.2}>
        Get Started
      </Box>
    </Box>
  )
}

export default Boost;