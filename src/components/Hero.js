import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
class Hero extends Component {
  render() {
    return (
      <Jumbotron fluid style={{ backgroundColor: "transparent" }}>
        <Container fluid>
          <Row>
            <Col xs="12" sm="3">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%"
                }}
              >
                <img src="https://unsplash.it/100" alt="my logo" />
              </div>
            </Col>
            <Col xs="12" sm="8">
              <h1 className="text-sm-left">Hello, I'm Augustine Wong</h1>
              <p className="lead text-justify">
                A self taught web developer focusing on{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer external"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "600"
                  }}
                >
                  ReactJs
                </a>.<br />Currently on the lookout for frontend web development
                opportunities. <br />Do take a look at some of my works below or
                drop me a word at{" "}
                <a
                  href="mailto:augustine.wongbh@gmail.com"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "600"
                  }}
                >
                  augustine.wongbh@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;
