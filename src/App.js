import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';

import { Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<Work />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
