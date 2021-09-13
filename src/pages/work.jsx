import nuvalenceImage from "../assets/nuvalence.jpeg";
import bespokeImage from "../assets/bespoke.png";
import canadaImage from "../assets/canada.png";
import faireImage from "../assets/faire.png";
import lifionImage from "../assets/lifion.png";
import opentextImage from "../assets/opentext.png";
import { work } from "../staticText.json";
import { Component } from "react";

export default class Work extends Component {
  state = {
    clicked: false,
    companyName: "",
  };

  handleClick(name) {
    this.setState({ clicked: true, companyName: name });
  }

  displayWorkInfo(name) {
    const workInfo = work[name];
    if (!workInfo) return null;
    return (
      <div className="workInfoMain">
        <h1> {workInfo.name} </h1>
        <h3> {workInfo.position} </h3>
        <div>
          <p> {workInfo.date} </p>
          <p>{workInfo.location}</p>
        </div>
        <p> {workInfo.description} </p>
      </div>
    );
  }

  render() {
    const { clicked } = this.state;
    return (
      <div id="work" className="workMain">
        <div className="workLogos">
          <div className="workTop">
            <img
              onClick={() => this.handleClick("nuvalence")}
              className="sq"
              src={nuvalenceImage}
              alt="nuvalence"
            />
            <img
              onClick={() => this.handleClick("lifion")}
              src={lifionImage}
              alt="lifion by adp"
            />
            <img
              onClick={() => this.handleClick("faire")}
              src={faireImage}
              alt="faire"
            />
          </div>
          <div className="workBottom">
            <img
              onClick={() => this.handleClick("bespoke")}
              src={bespokeImage}
              alt="bespoke metrics"
            />
            <img
              onClick={() => this.handleClick("opentext")}
              className="sq"
              src={opentextImage}
              alt="opentext"
            />
            <img
              onClick={() => this.handleClick("canada")}
              src={canadaImage}
              alt="envrionment canada"
            />
          </div>
        </div>
        <div className="work">
          {clicked ? this.displayWorkInfo(this.state.companyName) : null}
          {!clicked ? (
            <p> click a logo to learn more about my time at the company </p>
          ) : null}
        </div>
      </div>
    );
  }
}
