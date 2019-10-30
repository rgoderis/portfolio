import React from 'react';
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Background from "./components/Background";
import ContactCard from "./components/ContactCard";
import InfoCard from "./components/InfoCard"


class App extends React.Component {
  state = {
    projects
  }

  render() {
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
