import React from "react";

import { Container, Row, Col } from "reactstrap";

import CodepenIcon from "../static/CodepenIcon";
import LinkedInIcon from "../static/LinkedInIcon";
import GithubIcon from "../static/GithubIcon";
import GoogleIcon from "../static/GoogleIcon";

import "./stylesheets/Footer.css";
const Footer = () => (
  <footer>
    <Container fluid>
      <Row>
        <Col
          xs="12"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "0.5em"
          }}
        >
          <span
            style={{ width: "20vw", height: "1px", border: "1px solid #000" }}
          />

          <div className="svgContainer">
            <a
              className="svgLink"
              target="_blank"
              rel="noopener noreferrer external"
              href="https://www.linkedin.com/in/augustinewongbh/"
            >
              <LinkedInIcon className="svgProp" />
            </a>
            <a
              className="svgLink"
              target="_blank"
              rel="noopener noreferrer external"
              href="https://github.com/augustinewongbh/"
            >
              <GithubIcon className="svgProp" />
            </a>
            <a
              className="svgLink"
              target="_blank"
              rel="noopener noreferrer external"
              href="https://codepen.io/augustinewongbh/"
            >
              <CodepenIcon className="svgProp" />
            </a>
            <a
              className="svgLink"
              target="_blank"
              rel="noopener noreferrer external"
              href="mailto:augustine.wongbh@gmail.com"
            >
              <GoogleIcon className="svgProp" />
            </a>
          </div>

          <span
            style={{ width: "20vw", height: "1px", border: "1px solid #000" }}
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
