import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import MobileNav from './components/MobileNav';
import NavbarList from './components/Lists/NavbarList';


const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  useEffect(() => {
  }, [isDesktop])

  return <>
    <MobileNav isMobile={isMobile} />
    <Hero />
    <Story />
    <Projects />
  </>;
}

export default App;
