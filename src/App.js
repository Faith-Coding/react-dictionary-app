import logo from "./logo.jpeg";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          Coded by Akhigbe Faith
          <a href="https://github.com/Faith-Coding/react-dictionary-app">{""}
            Open Source{""}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
