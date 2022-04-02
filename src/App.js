import React from 'react'
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
import Footer from './components/footer/footer'
import TitleRoute from './components/common/RouteTitle';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:null
    }
  }
  getData = async() => {
    const res = await fetch('constants.json');
    const data = await res.json();
    this.setState({data:data})
  }

  componentDidMount=()=>{
    this.getData();
  }
  
  render(){
    console.log(this.state.data)
    return (
      <>
        {this.state.data 
          ?
          <div className="App">
            <InfoBar link={this.state.data.links}/>
            <NavBar navigation={this.state.data.navigation}/>
            <TitleRoute navigation={this.state.data.navigation}/>
            <Routes>
              <Route path="/" element={<Home data={this.state.data.home} services={this.state.data.services}/>} />
              <Route path="about" element={<About aboutData={this.state.data.about} links={this.state.data.links}/>} />
              <Route path="services" element={<Services servicesData={this.state.data.services}/>} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact links={this.state.data.links} data={this.state.data.contactUS}/>} />
            </Routes>
            <Footer navigation={this.state.data.navigation} links={this.state.data.links}/>
          </div>
          : 
          <></>
        }
      </>
    );
  }
}

export default App;
