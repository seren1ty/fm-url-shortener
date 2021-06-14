import { Box } from '@material-ui/core';
import styled from 'styled-components';

const AdvancedStatistics = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={0} py={0}>
      <Title>
        Advanced Statistics
      </Title>
      <Detail color="hsl(0, 0%, 70%)" lineHeight={1.8} textAlign="center" maxWidth="500px" pb={4}>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </Detail>
    </Box>
  )
}

export default AdvancedStatistics;

const Title = styled(Box)`
  color: hsl(255, 11%, 22%);
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  line-height: 1.1;
  padding-bottom: 16px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`

const Detail = styled(Box)`
  color: hsl(0, 0%, 70%);
  line-height: 1.8;
  text-align: center;
  max-width: 500px;
  padding-bottom: 32px;

  @media (max-width: 799px) {
    width: 270px;
    font-size: 14px;
  }
`