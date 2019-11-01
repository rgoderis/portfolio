import React from 'react';
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Background from "./components/Background";
import Wrapper from "./components/Wrapper";
import projects from "./projects";


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
          {this.state.projects.map(project=>(
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}


export default App;
