import React, { Component } from "react";
import EachCard from "./EachCard";

import { CardColumns, Card } from "reactstrap";
import "./stylesheets/Portfolios.css";
import wikiviewer from "../static/wikipedia-viewer.PNG";
import quotegenerator from "../static/quote-generator.PNG";
import fccBio from "../static/fcc-biography.PNG";
class Portfolios extends Component {
  render() {
    return (
      <CardColumns className="cardcol">
        <Card body outline>
          <div className="titleContainer">
            <h1 style={{ marginBottom: "0" }}>Projects</h1>
          </div>
        </Card>
        <EachCard
          img="https://unsplash.it/300/200/?random"
          title="Project 1"
          details="This project is designed using React, Reactstrap.........."
        />
        <EachCard
          img={wikiviewer}
          width="300px"
          title="Wikipedia Viewer"
          details="Designed using React and Bootstrap. This site is a simple search engine for Wikipedia"
          link="https://codepen.io/augustinewongbh/full/eGezyv/"
        />
        <EachCard
          img={quotegenerator}
          width="300px"
          title="Quote Generator"
          details="A simple page using jquery to obtain quotes from forismatic"
          link="https://codepen.io/augustinewongbh/full/XREOwB/"
        />
        <EachCard
          img="https://unsplash.it/300/?random"
          title="Project 1"
          details="This project is designed using React, Reactstrap.........."
        />
        <EachCard
          img={fccBio}
          width="300px"
          title="Biography - FCC"
          details="My first page created based on the example given on FreeCodeCamp. A pure HTML and CSS site."
        />
      </CardColumns>
    );
  }
}

export default Portfolios;
