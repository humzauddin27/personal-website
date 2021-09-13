import GithubIcon from "../assets/github";
import LinkedInLogo from "../assets/linkedin";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="main">
      <div className="links">
        <div className="button">
          {" "}
          <a href="#work">
            <p> work </p>{" "}
          </a>
        </div>
        <div className="button">
          <a href="#projects">
            <p> projects </p>{" "}
          </a>
        </div>
        <div className="button">
          <a href="#about">
            <p> about </p>{" "}
          </a>
        </div>
      </div>
      <div className="homeIcon">
        <a href="#intro">
          {" "}
          <img src={logo} alt="HF" />{" "}
        </a>
      </div>
      <div className="icons">
        <a
          href="https://github.com/humzauddin27/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <GithubIcon size={"50"} fill={"#d8d9d7"} />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/humzauddin27/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <LinkedInLogo size={"50"} fill={"#d8d9d7"} />{" "}
        </a>
      </div>
    </div>
  );
}
