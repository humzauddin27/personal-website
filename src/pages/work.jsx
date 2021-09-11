import nuvalence from "../assets/nuvalence.jpeg";
import bespoke from "../assets/bespoke.png";
import gov from "../assets/canada.png";
import faire from "../assets/faire.png";
import lifion from "../assets/lifion.png";
import opentext from "../assets/opentext.png";

export default function Work() {
  return (
    <div className="workMain">
      {" "}
      <div className="workLogos">
        <div className="workTop">
          <img className="sq" src={nuvalence} alt="nuvalence" />
          <img src={lifion} alt="lifion by adp" />
          <img src={faire} alt="faire" />
        </div>
        <div className="workBottom">
          <img src={bespoke} alt="bespoke metrics" />
          <img className="sq" src={opentext} alt="opentext" />
          <img src={gov} alt="government of canada" />
        </div>
      </div>
      <p> click a logo to learn more about my time at the company </p>
    </div>
  );
}
