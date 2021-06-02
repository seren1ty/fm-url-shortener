import { Box } from '@material-ui/core';
import styled from 'styled-components';
import WorkingImage from '../assets/images/illustration-working.svg';

const Header = () => {
  return (
    <HeadingContainer>
      <HeadingPanel>
        <Heading>
          More than just shorter links
        </Heading>
        <SubHeading>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </SubHeading>
        <GetStartedButton>
          Get Started
        </GetStartedButton>
      </HeadingPanel>

      <Box display="flex">
        <Box pl={10} mr={-30}>
          <img src={WorkingImage} alt="Working"/>
        </Box>
      </Box>
    </HeadingContainer>
  )
}

export default Header;

const HeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
`

const HeadingPanel = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: 550px;
  max-width: 50%;
  padding-top: 64px;
`

const Heading = styled(Box)`
  color: hsl(255, 11%, 22%);
  font-weight: 700;
  font-size: 70px;
  text-align: left;
  line-height: 1.1;
`

const SubHeading = styled(Box)`
  color: hsl(0, 0%, 70%);
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  max-width: 500px;
  padding-bottom: 32px;
`

const GetStartedButton = styled(Box)`
  background: hsl(180, 66%, 49%);
  width: 180px;
  height: 50px;
  color white;
  border-radius: 50px;
  line-height: 2.8;

  &:hover {
    background: hsl(180, 66%, 74%);
  }
`