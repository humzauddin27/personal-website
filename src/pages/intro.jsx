import resume from "../assets/resume.pdf";
import bulba from "../assets/bulba.gif";
import charmander from "../assets/charmander.gif";
import squirtle from "../assets/squirtle.gif";

export default function Intro() {
  return (
    <div id="intro" className="introMain">
      <div style={{ width: "50%" }}>
        <h1 className="introHello">
          {" "}
          hi, i'm humza faheemuddin. a full-stack developer.{" "}
        </h1>
        <div className="introText">
          <p>
            i graduated in april 2020 with a degree in honours mathematics,
            co-op from the university of waterloo.
          </p>{" "}
          <p className="resume">
            {" "}
            <a href={resume} target="_blank" rel="noreferrer">
              you can check out my resume here.{" "}
            </a>{" "}
          </p>{" "}
        </div>
      </div>
      <div className="intro">
        <div className="introImage">
          <img src={charmander} alt="charmander" />
          <img src={bulba} alt="bulbasaur" />
          <img src={squirtle} alt="squirtle" />
        </div>
      </div>
    </div>
  );
}
