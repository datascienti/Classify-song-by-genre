import logo from './logo.svg';
import './App.css';

function App() {
  const handlenc = () =>{
    const names = ["hari","john","kevin"];
    const int = Math.floor(Math.random()*3)
    return names[int]
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Hello {handlenc()}
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
