import './app.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navBar";
import InfoBar from "./components/header/infoBar";
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Faq from './components/pages/faq/faq';
import Careers from './components/pages/careers/careers';
import Services from './components/pages/services/services'

function App() {
  return (
    <div className="App">
      <InfoBar/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services/>} />
        <Route path="faq" element={<Faq />} />
        <Route path="careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
