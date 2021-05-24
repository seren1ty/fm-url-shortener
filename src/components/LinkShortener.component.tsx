import { useState, useCallback } from 'react';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import ShortenerBackground from '../assets/images/bg-shorten-desktop.svg';

type ShortenedUrl = {
  original: string;
  result: string;
};

const LinkShortener = () => {

  const [newUrl, setNewUrl] = useState<string>("");
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([]);

  // TODO Load last 3 results from localstorage

  const onClickShorten = useCallback(() => {
    // TODO Shorten URL
    const result = "http://SFJNEenj43";
    setShortenedUrls([...shortenedUrls, { original: newUrl, result }]);
    // TODO Store last 3 results in list in localstorage
  }, [newUrl, shortenedUrls]);

  const onClickCopy = (url: string) => {
    // TODO Change copy button to 'Copied!'
    navigator.clipboard.writeText(url);
  };

  return (
    <ShortenerContainer>
      <Box position="relative" display="flex" justifyContent="center" alignItems="center" height={168} px={8} py={0}>
        <Box position="absolute" zIndex={-1} bgcolor="hsl(257, 27%, 26%)" height={168} borderRadius="10px" overflow="hidden">
          <img src={ShortenerBackground} alt="Shortener Background"/>
        </Box>
        <Box display="flex" alignItems="center" width="100%" fontWeight={700}>
          <Box flexGrow={1} minWidth={200} lineHeight={1.1} mr={11}>
            <StyledInput value={newUrl} onChange={(value) => setNewUrl(value.currentTarget.value)} placeholder="Shorten a link here..." />
          </Box>
          <ShortenButton onClick={onClickShorten}>
            Shorten It!
          </ShortenButton>
        </Box>
      </Box>
      <ShortenedResultContainer>
      {
        shortenedUrls && shortenedUrls.length > 0 &&
        shortenedUrls.map((urlData, idx) =>
          (
            <ShortenedResultLine key={idx}>
              <ShortenedResult>
                <Box>
                  {urlData.original}
                </Box>
                <Box color="hsl(180, 66%, 49%)">
                  {urlData.result}
                </Box>
              </ShortenedResult>
              <CopyButton onClick={() => onClickCopy(urlData.result)}>
                Copy
              </CopyButton>
            </ShortenedResultLine>
          )
        )
      }
      </ShortenedResultContainer>
    </ShortenerContainer>
  )
}

export default LinkShortener;

const ShortenerContainer = styled(Box)`
  position: relative;
  top: -85px;
  margin: 16px 165px 30px 165px;
`

const StyledInput = styled.input`
  border: 0;
  border-radius: 10px;
  width: 100%;
  color: hsl(0, 0%, 50%);
  font-size: 20px;
  font-weight: 700;
  outline: 0;
  padding: 18px 30px;

  ::placeholder {
    color: hsl(0, 0%, 50%);
  }
`

const ShortenButton = styled(Button)`
  background: hsl(180, 66%, 49%);
  color: white;
  min-width: 160px;
  height: 60px;
  border-radius: 10px;
  line-height: 3.4;

  &:hover {
    background: hsl(180, 66%, 44%);
  }
`

const ShortenedResultContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 16px;
`

const ShortenedResultLine = styled(Box)`
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    padding: 0 20px;
  }
`

const ShortenedResult = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`

const CopyButton = styled(Button)`
  background: hsl(180, 66%, 49%);
  color: white;
  min-width: 90px;
  height: 35px;
  border-radius: 10px;
  line-height: 3.4;
  margin-right: 20px;

  &:hover {
    background: hsl(180, 66%, 44%);
  }
`