import { Box } from '@material-ui/core';
import './App.css';
import AdvancedStatistics from './components/AdvancedStatistics.component';
import Header from './components/Header.component';
import Highlights from './components/Highlights.component';
import LinkShortener from './components/LinkShortener.component';
import Navbar from './components/Navbar.component';

function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Header/>
      <LinkShortener/>
      <AdvancedStatistics/>
      <Highlights/>
      Boost your links today

      Get Started

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
