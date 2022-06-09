import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SelectedProjects from './components/SelectedProjects';
import About from './components/About';

import { useState, useCallback, useEffect, useRef } from 'react';
import WebDesignFormula from './components/WebDesignFormula';

import Skills from './components/Skills';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scrolldown from './components/Scrolldown';
import Navigation from './components/Navigation';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

function App() {
  const [selectedProject, setSelectedProjects] = useState([]);
  const footer = useRef();
  const main = useRef();
  const homepage = useRef();
  const fetchData = useCallback(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => { setSelectedProjects(data); });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData])


  const setScrollPos = () => {
    sessionStorage.setItem('scrollpos', window.scrollY);
  }
  useEffect(() => {

    window.addEventListener("beforeunload", setScrollPos);
    var scrollpos = sessionStorage.getItem('scrollpos');
    window.scrollTo(0, scrollpos)

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times, also always do this to aviod creating more memory.
      window.removeEventListener("scroll", setScrollPos);
    };
  });

  const SPAPage = () => {
    return (
      <>
        {/* <Navigation isShowMenu={isshowmenu => setShowMenuModal(isshowmenu)} /> */}
        <Navigation mainRef={main} homepageRef={homepage} />
        <main ref={main}>
          <div ref={homepage}>
            <Homepage /></div>
          <SelectedProjects projectitem={selectedProject} />
          <About />
          <WebDesignFormula />
          <Skills />
          <Tools />
          <Contact />
          <Scrolldown passRef={footer} />
          <div ref={footer}>
            <Footer />
          </div>

        </main>
      </>
    )
  }

  return (
    <>
      {selectedProject.length <= 0 &&
        < Loading />
      }
      {selectedProject.length > 0 &&
        <Router>

          <Routes>
            <Route exact path="/" element={<SPAPage />} />

            <Route exact path='/*' element={<NotFound />} />
          </Routes>

        </Router >

      }
    </>

  );
}

export default App;