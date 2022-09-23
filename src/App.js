import Navbar from './component/pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import AboutUs from './component/features/AboutUs';
import Footer from './component/pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
