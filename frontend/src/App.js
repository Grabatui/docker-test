import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const makeTestRequest = () => {
    axios('/api/withCurrentUser').then((reponse) => {
      console.log(reponse);
    });
  };

  const makeApiRequest = () => {
    axios.post('/api/testMail').then((response) => {
      console.log(response);
    });
  };

  const makeAuthRequest = () => {
    axios.post('/auth/api/testMail').then((response) => {
      console.log(response);
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

      <button onClick={makeTestRequest}>Make test api request</button>

      <button onClick={makeApiRequest}>Make mail api request</button>

      <button onClick={makeAuthRequest}>Make mail auth request</button>
    </div>
  );
}

export default App;
