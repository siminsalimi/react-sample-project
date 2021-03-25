import React from 'react';
import logo from '../image/logo.svg';
import Sidebar from '../sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={ssLogo} className="SS-logo" alt="logo" /> */}
        <p>
          Welcome To My Little World.
        </p>
      <Sidebar/>
      </header>
    </div>
  );
}

export default App;
