import humza1 from "../assets/humza1.png";
import humza2 from "../assets/humza2.jpeg";
import { about } from "../staticText.json";

export default function About() {
  const { main, par1, par2, par3 } = about;
  return (
    <div id="about" className="aboutMain">
      <div className="aboutImage">
        <img className="profileImage" src={humza1} alt="me" />
        <img className="profileImage2" src={humza2} alt="2nd me" />
      </div>

      <div className="aboutText">
        <div className="aboutTitle">
          {" "}
          {main} as a full-stack developer at{" "}
          <a href="https://nuvalence.io/" target="_blank" rel="noreferrer">
            {" "}
            nuvalence.
          </a>{" "}
          we help companies build out digital platforms and products with our
          expertise in cloud services{" "}
        </div>
        <p className="aboutPar"> {par1} </p>
        <p className="aboutPar"> {par2} </p>
        <p className="aboutPar"> {par3} </p>
      </div>
    </div>
  );
}
