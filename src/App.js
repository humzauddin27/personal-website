import "./App.css";
import Header from "./components/header";
import { Intro, Work, Projects, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Work />
      <Projects />
      <About />
    </div>
  );
}

export default App;
