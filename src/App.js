import logo from "./logo.png";
import Dictionary from "./Dictionary";
import { FaGithub, FaCode } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="ball" />
        </main>
        <footer className="app-footer">
          <FaCode className="coded" />
           by Akhigbe Faith
          <a href="https://github.com/Faith-Coding/react-dictionary-app">
            <FaGithub />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
