import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolios from "./components/Portfolios";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="App" fluid>
        <Header />
        <div id="Home" className="herocontainer">
          <Hero />
        </div>
        <div id="Portfolio" />
        <hr className="my-4" />
        <Row>
          <Col>
            <Portfolios />
          </Col>
        </Row>
        <hr className="my-3" />
        <div id="About">
          <About />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;
