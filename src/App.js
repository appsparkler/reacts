import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FileInput, FirebaseUtils} from '@appsparkler/react-hfn-components'
FirebaseUtils.app = {}
function App() {
  // const [uploadDetails, setUploadDetails] = React.useState([])
  // const FileInputConfig = {
  //
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FileInput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
