import './Styles.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navBar";
import InfoBar from "./components/header/infoBar";
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
// import Faq from './components/pages/faq/faq';
import Blog from './components/pages/blog/Blog';
// import Careers from './components/pages/careers/careers';
import Contact from './components/pages/contact/contact';
import Services from './components/pages/services/services'
import Footer from './components/footer'
import TitleRoute from './components/common/RouteTitle';

function App() {
  return (
    <div className="App">
      <InfoBar/>
      <NavBar/>
      <TitleRoute/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services/>} />
        <Route path="blog" element={<Blog />} />
        {/* <Route path="faq" element={<Faq />} />
        <Route path="careers" element={<Careers />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
