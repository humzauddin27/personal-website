import { projects } from "../staticText.json";

export default function Project({ projectName }) {
  const { language, demo, description, name } = projects[projectName];
  return (
    <div className="projectMain">
      <div className="projectTitle">
        {name}
        <div className="language"> {language} </div>
      </div>
      <div className="projectDemo">{demo}</div>
      <div className="projectDescription">{description}</div>
    </div>
  );
}
