import GithubIcon from "../assets/github";
import LinkedInLogo from "../assets/linkedin";

export default function Header() {
  //todo: scroll onclick for work/projects/etc
  //todo: update HF with Logo HF (and center properly)
  return (
    <div className="main">
      <div className="links">
        <div className="button">
          {" "}
          <p> work </p>{" "}
        </div>
        <div className="button">
          <p> projects </p>{" "}
        </div>
        <div className="button">
          <p> about </p>{" "}
        </div>
        <div className="button">
          <p> contact </p>{" "}
        </div>
      </div>
      <div className="homeIcon">
        <p>HF</p>
      </div>
      <div className="icons">
        <a href="https://github.com/humzauddin27/" target="_blank">
          {" "}
          <GithubIcon size={"50"} fill={"#d8d9d7"} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/humzauddin27/" target="_blank">
          {" "}
          <LinkedInLogo size={"50"} fill={"#d8d9d7"} />{" "}
        </a>
      </div>
    </div>
  );
}
