import React from "react";
import "./Styles.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/navBar";
import Home from "./components/pages/home/home";
import Footer from "./components/footer/footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  getData = async () => {
    const res = await fetch("constants.json");
    const data = await res.json();
    this.setState({ data: data });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <>
        {this.state.data ? (
          <div className="App">
            <NavBar
              navigation={this.state.data.navigation}
              link={this.state.data.links}
              data={this.state.data.home}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    data={this.state.data}
                    services={this.state.data.services}
                  />
                }
              />
            </Routes>
            <Footer
              navigation={this.state.data.navigation}
              links={this.state.data.links}
            />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default App;
