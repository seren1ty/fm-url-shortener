import { Box } from '@material-ui/core';
import styled from 'styled-components';
import BrandRecognitionImage from '../assets/images/icon-brand-recognition.svg';
import DetailedRecordsImage from '../assets/images/icon-detailed-records.svg';
import FullyCustomisableImage from '../assets/images/icon-fully-customizable.svg';

const Highlights = () => {
  return (
    <HighlightContainer>
      <Box width="500px" height="10px" bgcolor="hsl(180, 66%, 49%)" position="absolute" top="50%"></Box>
      <Highlight alignSelf="flex-start">
        <IconContainer>
          <img src={BrandRecognitionImage} alt="Brand Recognition"/>
        </IconContainer>
        <Box color="hsl(255, 11%, 22%)" fontWeight={700} fontSize={22} textAlign="left" lineHeight={1.1} pb={2}>
          Brand Recognition
        </Box>
        <Box color="hsl(0, 0%, 70%)" fontSize={14} lineHeight={1.8} textAlign="left" maxWidth="500px" pb={4}>
          Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
        </Box>
      </Highlight>

      <Highlight alignSelf="center">
        <IconContainer>
          <img src={DetailedRecordsImage} alt="Detailed Records"/>
        </IconContainer>
        <Box color="hsl(255, 11%, 22%)" fontWeight={700} fontSize={22} textAlign="left" lineHeight={1.1} pb={2}>
          Detailed Records
        </Box>
        <Box color="hsl(0, 0%, 70%)" fontSize={14} lineHeight={1.8} textAlign="left" maxWidth="500px" pb={4}>
          Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
        </Box>
      </Highlight>

      <Highlight alignSelf="flex-end">
        <IconContainer>
          <img src={FullyCustomisableImage} alt="Fully Customisable"/>
        </IconContainer>
        <Box color="hsl(255, 11%, 22%)" fontWeight={700} fontSize={22} textAlign="left" lineHeight={1.1} pb={2}>
          Fully Customizable
        </Box>
        <Box color="hsl(0, 0%, 70%)" fontSize={14} lineHeight={1.8} textAlign="left" maxWidth="500px" pb={4}>
          Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
        </Box>
      </Highlight>
    </HighlightContainer>
  )
}

export default Highlights;

const HighlightContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  height: 360px;
  gap: 25px;
  padding: 80px 160px;
  position: relative;
`

const Highlight = styled(Box)`
  max-width: 270px;
  min-width: 216px;
  height: 150px;
  padding: 70px 30px 30px 30px;
  background: white;
  border-radius: 5px;
  position: relative;
`

const IconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background: hsl(257, 27%, 26%);
  border-radius: 50%;
  position: absolute;
  top: -45px;
`