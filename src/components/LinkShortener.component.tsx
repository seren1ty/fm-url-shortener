import { Box } from '@material-ui/core';
import styled from 'styled-components';
import ShortenerBackground from '../assets/images/bg-shorten-desktop.svg';

const LinkShortener = () => {
  return (
    <Box px={20} pt={10} pb={20}>
      <Box position="relative" display="flex" justifyContent="center" alignItems="center" height={168} px={8} py={0}>
        <Box position="absolute" zIndex={-1} bgcolor="hsl(257, 27%, 26%)" height={168} borderRadius="10px" overflow="hidden">
          <img src={ShortenerBackground} alt="Shortener Background"/>
        </Box>
        <Box display="flex" alignItems="center" width="100%" fontWeight={700}>
          <Box flexGrow={1} lineHeight={1.1} mr={11}>
            <StyledInput placeholder="Shorten a link here..." />
          </Box>
          <Box bgcolor="hsl(180, 66%, 49%)" minWidth={160} height={60} color="white" borderRadius={10} lineHeight={3.3}>
            Shorten It!
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LinkShortener;

const StyledInput = styled.input`
  background-color: white;
  border: 0;
  border-radius: 10px;
  width: 100%;
  color: hsl(0, 0%, 70%);
  font-size: 20px;
  font-weight: 700;
  outline: 0;
  padding: 18px 30px;
`