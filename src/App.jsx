import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Loans from './pages/Loans';
import BuySell from './pages/BuySell';
import Calculator from './pages/Calculator';
import Apply from './pages/Apply';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

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
        </Routes>
    </Router>
  );
};

export default App;
