import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon"/>
        <header className="App-header"></header>
        <footer>
          <a href="https://github.com/kch1-jpeg/weather-app-react">
            Open Source Code 
          </a>
           by Kira
        </footer>
      </div>
    </div>
  ); 
}

export default App;
