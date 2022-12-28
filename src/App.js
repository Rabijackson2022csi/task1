// import logo from './logo.svg';
import './App.css';
import Pgone from './pg1';
import Pgtwo from './pg2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <Pgone/>
      <Pgtwo/>
    </div>
  );
}

export default App;
