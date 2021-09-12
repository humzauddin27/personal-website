import humza1 from "../assets/humza1.png";
import humza2 from "../assets/humza2.jpeg";
import { about } from "../staticText.json";

export default function About() {
  const { main, par1, par2, par3 } = about;
  return (
    <div className="aboutMain">
      <div className="aboutImage">
        <img className="profileImage" src={humza1} />
        <img className="profileImage2" src={humza2} />
      </div>

      <div className="aboutText">
        <div className="aboutTitle"> {main} </div>
        <p className="aboutPar"> {par1} </p>
        <p className="aboutPar"> {par2} </p>
        <p className="aboutPar"> {par3} </p>
      </div>
    </div>
  );
}
