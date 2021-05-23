import { Box } from '@material-ui/core';

const AdvancedStatistics = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={0} py={0}>
      <Box color="hsl(255, 11%, 22%)" fontWeight={700} fontSize={40} textAlign="center" lineHeight={1.1} pb={2}>
        Advanced Statistics
      </Box>
      <Box color="hsl(0, 0%, 70%)" lineHeight={1.8} textAlign="center" maxWidth="500px" pb={4}>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Box>
    </Box>
  )
}

export default AdvancedStatistics;