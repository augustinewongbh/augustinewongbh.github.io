import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./stylesheets/About.css";
import augustineResume from "../static/AugustineWong_Resume.pdf";
class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>About Me</h1>
            <p className="lead text-justify">
              I graduated with a Bachelor in Electrical & Computer Systems,
              where I learnt some basics in coding - mainly C++ and MatLab.
              Currently looking to transistion into a web developer. My web
              development skills are self taught; with the help of {" "}
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer external"
              >
                FreeCodeCamp
              </a>{" "}
              and other online resources.
              <br />
              Download my Resume <a href={augustineResume}>here</a>.
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="lead text-justify">
              Check out some of my social profiles below:
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
