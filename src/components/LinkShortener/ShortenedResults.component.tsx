import { useCallback } from "react";
import { Box, Button } from "@material-ui/core";
import styled from "styled-components";
import { ShortenedUrl } from "./LinkShortener.component";

type Props = {
  shortenedUrls: ShortenedUrl[];
};

const ShortenedResults = (props: Props) => {
  const onClickCopy = useCallback((url: string) => {
    // TODO Change copy button to 'Copied!'
    navigator.clipboard.writeText(url);
  }, []);

  return (
    <ShortenedResultContainer>
    {
      props.shortenedUrls &&
      props.shortenedUrls.length > 0 &&
      props.shortenedUrls.map((urlData, idx) =>
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
  )
}

export default ShortenedResults;

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
  border-radius: 5px;
  line-height: 3.5;
  margin-right: 20px;
  text-transform: none;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;

  &:hover {
    background: hsl(180, 66%, 74%);
  }
`