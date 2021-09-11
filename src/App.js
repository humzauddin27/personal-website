import "./App.css";
import Header from "./components/header";
import { Intro, Work, Projects, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <div className="divider" />
      <Work />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <About />
      <div className="divider" />
    </div>
  );
}

export default App;
