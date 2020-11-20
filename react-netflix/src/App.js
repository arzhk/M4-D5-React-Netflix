import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Component/NavBar";
import Jumbotron from "./Component/Jumbotron";
import Footer from "./Component/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <Footer />
      </>
    );
  }
}

export default App;
