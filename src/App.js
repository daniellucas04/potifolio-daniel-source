import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/daniel-portifolio' element={<Home />} />
        <Route path='/daniel-portifolio/projects' element={<Projects />} />
        <Route path='/daniel-portifolio/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
