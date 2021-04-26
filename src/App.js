import "./styles/App.scss";
import Intro from "./components/Intro.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="App-container">
      <Intro />
      <Content />
      <Footer/> 
    </div>
  );
}

export default App;
