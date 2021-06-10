import { Box } from '@material-ui/core';
import styled from 'styled-components';
import BoostBackground from '../assets/images/bg-boost-desktop.svg';

const Boost = () => {
  return (
    <BoostContainer>
      <BackgroundContainer>
        <img src={BoostBackground} alt="Boost Background"/>
      </BackgroundContainer>
      <BoostTitle>
        Boost your links today
      </BoostTitle>
      <BoostButton>
        Get Started
      </BoostButton>
    </BoostContainer>
  )
}

export default Boost;

const BoostContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 160px 56px 160px;

  @media (max-width: 1037px) {
    margin: 16px 20px 30px 20px;
  }
`

const BackgroundContainer = styled(Box)`
  position: absolute;
  z-index: -1;
  background: hsl(257, 27%, 26%);
  height: 240px;
  overflow: hidden;
`

const BoostTitle = styled(Box)`
  color: white;
  font-weight: 700;
  font-size: 40px;
  text-align: left;
  line-height: 1.1;
  padding-bottom: 32px;
`

const BoostButton = styled(Box)`
  background: hsl(180, 66%, 49%);
  width: 180px;
  height: 50px;
  color: white;
  border-radius: 50px;
  line-height: 2.8;

  &:hover {
    background: hsl(180, 66%, 74%);
  }
`