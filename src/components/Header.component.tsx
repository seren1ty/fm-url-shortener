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
        <ImageContainer>
          <Image src={WorkingImage} alt="Working"/>
        </ImageContainer>
      </Box>
    </HeadingContainer>
  )
}

export default Header;

const HeadingContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;

  @media (max-width: 1037px) {
    padding: 32px 20px;
  }

  @media (max-width: 799px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const HeadingPanel = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: 550px;
  max-width: 50%;
  padding-top: 64px;

  @media (max-width: 799px) {
    max-width: 270px;
    align-items: center;
  }
`

const Heading = styled(Box)`
  color: hsl(255, 11%, 22%);
  font-weight: 700;
  font-size: 70px;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 799px) {
    max-width: 270px;
    font-size: 36px;
    text-align: center;
  }
`

const SubHeading = styled(Box)`
  color: hsl(0, 0%, 70%);
  font-size: 20px;
  line-height: 1.7;
  text-align: left;
  max-width: 500px;
  padding-bottom: 32px;

  @media (max-width: 799px) {
    padding-top: 10px;
    max-width: 270px;
    font-size: 14px;
    text-align: center;
  }
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

const ImageContainer = styled(Box)`
  padding-left: 10px;
  margin-right: -30px;

  @media (max-width: 799px) {
    width: 100%;
    padding-left: 0;
    margin-right: 0;
  }
`

const Image = styled.img`
@media (max-width: 799px) {
  width: 130%;
}
`