import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    // <div className='max-w-[1920px] bg-gray-600 '>
    <Router >
      <div className='h-screen flex flex-col justify-between items-center '>
        <div className='w-full min-w-[370px]
         xl:max-w-7xl'
        >
          <NavBar />

          <Routes>

            <Route exact path="/" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />


            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/:project" element={<ProjectPage />} />
            {/* <Route path="/projects"  >
          <Route index element={<Projects />} />
          <Route path=":project" element={<ProjectPage />} />
        </Route> */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    // </div>
  );

}

export default App;
