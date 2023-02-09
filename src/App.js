import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:id' element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
