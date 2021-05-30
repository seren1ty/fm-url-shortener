import { useState, useCallback } from 'react';
import { Box, Button } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import ShortenerBackground from '../assets/images/bg-shorten-desktop.svg';
import axios from 'axios';

type ShortenedUrl = {
  original: string;
  result: string;
};

type BitlyResult = {
  data: {
    link: string;
  }
};

type FormValues = {
  newUrl: string;
}

const LinkShortener = () => {

  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([]);

  // TODO Load last 3 results from localstorage

  const onClickCopy = useCallback((url: string) => {
    // TODO Change copy button to 'Copied!'
    navigator.clipboard.writeText(url);
  }, []);

  const handleValidate = useCallback((values: FormValues) => {
    if (!values.newUrl)
      return { newUrl: "Please add a link" };
    return {};
  }, []);

  const handleSubmit = useCallback(async (values: FormValues, { setSubmitting }: any) => {
    const requestData = JSON.stringify({ long_url: values.newUrl });
    const requestOptions = { headers: { "Content-Type": "application/json", "Authorization": "Bearer " + process.env.REACT_APP_BITLY_AUTH_TOKEN }};

    const result: BitlyResult = await axios.post("https://api-ssl.bitly.com/v4/shorten", requestData, requestOptions);

    setShortenedUrls([...shortenedUrls, { original: values.newUrl, result: result.data.link }]);

    setSubmitting(false);
  }, [shortenedUrls]);

  return (
    <ShortenerContainer>
      <Box position="relative" display="flex" justifyContent="center" alignItems="center" height={168} px={8} py={0}>
        <Box position="absolute" zIndex={-1} bgcolor="hsl(257, 27%, 26%)" height={168} borderRadius="10px" overflow="hidden">
          <img src={ShortenerBackground} alt="Shortener Background"/>
        </Box>
        <Box width="100%">
          <Formik initialValues={{ newUrl: "" }} validate={handleValidate} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Box display="flex" alignItems="center" width="100%">
                <Box flexGrow={1} minWidth={200} lineHeight={1.1} mr={11} position="relative">
                  <StyledField name="newUrl" placeholder="Shorten a link here..." />
                  <StyledErrorMessage name="newUrl" component="div" />
                </Box>
                <ShortenSubmit type="submit" disabled={isSubmitting}>
                  Shorten It!
                </ShortenSubmit>
              </Box>
            </Form>
          )}
          </Formik>
        </Box>
      </Box>
      {/* Extract to new ShortenedResults component */}
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

const StyledField = styled(Field)`
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

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -25px;
  color: hsl(0, 87%, 67%);
  font-style: italic;
`

const ShortenSubmit = styled(Button)`
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