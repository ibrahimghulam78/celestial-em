import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/Styles.css';
import Marketplace from './pages/MarketPlace';
import './assets/css/Marketplace.css'
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route className='other-pages' path="/marketplace" element={<Marketplace />} />
            <Route className='other-pages' path="/blog/*" element={<Blog />} />
            <Route className='other-pages' path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;