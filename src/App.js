import "./styles/App.scss";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App-container">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
