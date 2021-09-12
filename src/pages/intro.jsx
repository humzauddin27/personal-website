export default function Intro() {
  return (
    <div className="introMain">
      <div style={{ width: "50%" }}>
        <h1 className="introHello">
          {" "}
          hi, i'm humza faheemuddin. a full-stack developer.{" "}
        </h1>
        <div className="introText">
          <p>
            {" "}
            currently i work full-time at{" "}
            <a href="https://nuvalence.io/" target="_blank">
              {" "}
              nuvalence
            </a>
            , a consulting firm which helps companies build out digital
            platforms and products with our expertise in cloud services{" "}
          </p>
        </div>
      </div>
      <div className="intro">
        <div className="introImage">some image</div>
      </div>
    </div>
  );
}
