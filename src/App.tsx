import { Box } from '@material-ui/core';
import styled from 'styled-components';
import './App.css';
import AdvancedStatistics from './components/AdvancedStatistics.component';
import Boost from './components/Boost.component';
import Footer from './components/Footer.component';
import Header from './components/Header.component';
import Highlights from './components/Highlights.component';
import LinkShortener from './components/LinkShortener/LinkShortener.component';
import Navbar from './components/Navbar.component';

function App() {
  return (
    <AppContainer className="App">
      <HeadContainer overflow="hidden">
        <Navbar/>
        <Header/>
      </HeadContainer>
      <MainContainer>
        <LinkShortener/>
        <AdvancedStatistics/>
        <Highlights/>
        <Boost/>
        <Footer/>
      </MainContainer>
      <Box className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/seren1ty">Seren1ty</a>.
      </Box>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Box)`
  overflow-x: hidden;
`

const HeadContainer = styled(Box)`
  overflow: hidden;
`

const MainContainer = styled(Box)`
  width: 100%;
  background: hsl(257, 7%, 95%);
  position: relative;
  z-index: 0;
  margin-top: 120px;
`