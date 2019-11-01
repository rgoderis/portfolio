import React from 'react';
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Background from "./components/Background";
import Wrapper from "./components/Wrapper";
import projects from "./projects.json";


class App extends React.Component {
  state = {
    projects
  }

  render() {
    return (
      <div>
        <Header className="App-header"/>
        <div className="row">
          <Background/>
          <Aside />
        </div>
        <Wrapper>
          
        </Wrapper>
      </div>
    );
  }
}


export default App;
