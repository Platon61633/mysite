import logo from './logo.svg';
import './App.css';
import prezin from "./assets/file.pptx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href={prezin} download>
            Скачать презентацию по руссскому
        </a>
      </header>
    </div>
  );
}

export default App;
