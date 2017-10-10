/*
This is a card component that will recieve props from Portfolio. Props include image, title, description.
Show Card image only when not hovered, then onHover, onClick show details
*/

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardLink,
  CardImgOverlay
} from "reactstrap";
import "./stylesheets/EachCard.css";
class EachCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  toggleShowCard = e => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };
  render() {
    return (
      <Card>
        <CardImg
          src={this.props.img}
          alt={this.props.title}
          onMouseEnter={this.toggleShowCard}
          width={this.props.width || "100%"}
          className={this.state.showDetails ? "addBlur" : "noBlur"}
        />
        <CardImgOverlay
          className={this.state.showDetails ? "visible" : "invisible"}
          onMouseLeave={this.toggleShowCard}
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <a
            href={this.props.link || "#"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.details}</CardText>
          </a>
        </CardImgOverlay>
      </Card>
    );
  }
}

export default EachCard;
