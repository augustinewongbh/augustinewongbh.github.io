import React, { Component } from "react";
import EachCard from "./EachCard";

import { CardColumns, Card } from "reactstrap";
import "./stylesheets/Portfolios.css";
import wikiviewer from "../static/wikipedia-viewer.PNG";
import quotegenerator from "../static/quote-generator.PNG";
import fccBio from "../static/fcc-biography.PNG";
import pomodoro from "../static/pomodoro.PNG";
import nomadrc from "../static/nomad-rc-clone.png";
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
          img={nomadrc}
          title="Nomad RockClimbing"
          width="300px"
          details="Replicating an existing website with the addition of responsive web elements."
          link="https://nomad-replica-byaugustine.surge.sh/"
        />
        <EachCard
          img={wikiviewer}
          width="300px"
          title="Wikipedia Viewer"
          details="Designed using React and Bootstrap. This site is a simple search engine for Wikipedia"
          link="https://codepen.io/augustinewongbh/full/eGezyv/"
        />
        <EachCard
          img={pomodoro}
          width="300px"
          title="Pomodoro Timer"
          details="Designed using React & Materialze.css. Features automated switching between work time and rest time, and a dynamic progress animation"
          link="https://codepen.io/augustinewongbh/pen/VMyRaW"
        />

        <EachCard
          img={quotegenerator}
          width="300px"
          title="Quote Generator"
          details="A simple page using jquery to obtain quotes from forismatic"
          link="https://codepen.io/augustinewongbh/full/XREOwB/"
        />

        <EachCard
          img={fccBio}
          width="300px"
          title="Biography - FCC"
          details="My first page created based on the example given on FreeCodeCamp. A pure HTML and CSS site."
          link="https://codepen.io/augustinewongbh/pen/aWzpGg"
        />
      </CardColumns>
    );
  }
}

export default Portfolios;
