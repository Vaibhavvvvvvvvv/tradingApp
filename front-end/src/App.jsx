import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './LandingPage/Home/HomePage';
import Navbar from './LandingPage/Navbar';
import About from './LandingPage/about/About';
import Pricing from './LandingPage/pricing/Pricing';
import Products from './LandingPage/products/Products';
import Signup from './LandingPage/signup/SignUp';
import Support from './LandingPage/support/Support';
import NotFound from './NotFound';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
