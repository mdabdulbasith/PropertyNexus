import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Loans from './pages/Loans';
import BuySell from './pages/BuySell';
import Calculator from './pages/Calculator';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import About from './pages/About';
// import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
};

export default App;
