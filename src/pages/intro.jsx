export default function Intro() {
  return (
    <div className="introMain">
      <div className="introText">
        <h1 className="introHello"> hello, i'm humza faheemuddin </h1>
        <div> i'm a software engineer </div>
        <p>
          {" "}
          currently i work at{" "}
          <a href="https://nuvalence.io/" target="_blank">
            {" "}
            nuvalence{" "}
          </a>
          , a consulting firm which helps companies build out digital platforms
          and products with our expertise in cloud services{" "}
        </p>
      </div>
      <div className="introImage">some image</div>
    </div>
  );
}
