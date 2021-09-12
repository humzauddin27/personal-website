import { projects } from "../staticText.json";
import tweetsweep from "../assets/tweetsweep_demo.mp4";
import pokemon from "../assets/pokemon_demo.mp4";

function returnVideo(projectName) {
  switch (projectName) {
    case "tweetsweep":
      return tweetsweep;
    case "who's that pokémon":
      return pokemon;
    default:
      return false;
  }
}

export default function Project({ projectName }) {
  const { date, language, description, name, link } = projects[projectName];
  const demo = returnVideo(name);
  return (
    <div className="projectMain">
      <div className="projectTitle">
        {link ? (
          <a className="projectLink" href={link} target="_blank">
            {name}
          </a>
        ) : (
          name
        )}
        <div className="language">
          {" "}
          <p> {language} </p>{" "}
        </div>
        <div className="date">
          <p> {date} </p>
        </div>
      </div>
      <div className="projectDemo">
        {demo ? (
          <video controls>
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          "No video"
        )}
      </div>
      <div className="projectDescription">
        <p>{description}</p>
      </div>
    </div>
  );
}
