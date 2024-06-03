import './App.css';
import prezin from "./assets/proekt.pptx";
import klim from "./assets/klim.pptx";

function App() {

  const ssylky = [{a:prezin, t: 'Скачать презентацию по руссскому'},
                  {a: klim, t: "klim"}]

  return (
    <div className="App">
      <header className="App-header">
        {ssylky.map(e=>
          <a
          className="App-link"
          href={e.a} download>
            {e.t}
        </a>
        )}
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
