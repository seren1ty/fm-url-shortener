import { Box } from '@material-ui/core';
import styled from 'styled-components';
import './App.css';
import AdvancedStatistics from './components/AdvancedStatistics.component';
import Boost from './components/Boost.component';
import Header from './components/Header.component';
import Highlights from './components/Highlights.component';
import LinkShortener from './components/LinkShortener.component';
import Navbar from './components/Navbar.component';

function App() {
  return (
    <Box className="App">
      <HeadContainer overflow="hidden">
        <Navbar/>
        <Header/>
      </HeadContainer>
      <MainContainer>
        <LinkShortener/>
        <AdvancedStatistics/>
        <Highlights/>
        <Boost/>
      </MainContainer>
      Features

      Link Shortening
      Branded Links
      Analytics

      Resources

      Blog
      Developers
      Support

      Company

      About
      Our Team
      Careers
      Contact

      <Box className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/seren1ty">Seren1ty</a>.
      </Box>
    </Box>
  );
}

export default App;

const HeadContainer = styled(Box)`
  overflow: hidden;
`

const MainContainer = styled(Box)`
  width: 100%;
  background: hsl(257, 7%, 95%);
  position: relative;
  z-index: -2;
  margin-top: 120px;
`