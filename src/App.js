import './App.css';
import prezin from "./assets/file.pptx";

function App() {

  const ssylky = [{a:"./assets/file.pptx", t: 'Скачать презентацию по руссскому'}, ]

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
        
      </header>
    </div>
  );
}

export default App;
