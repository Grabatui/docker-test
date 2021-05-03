import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const makeRequest = () => {
    axios('/api/withCurrentUser').then((reponse) => {
      console.log(reponse);
    });
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js!</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button onClick={makeRequest}>Make api request</button>
    </div>
  );
}

export default App;
