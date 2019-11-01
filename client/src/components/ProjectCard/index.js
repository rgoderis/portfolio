import React from "react"
import "./style.css"

function CharacterCard(props){
    return(
        <div className="card">
             <h1 className="card-header text-center">{props.name}</h1>
            <div className="img-container" data-id={props.id}>
                <img className="project-img" alt={props.name} src={props.image}/>
            </div>
            <div className="card-body text-center">
                <a href={props.link}><button className="btn btn-lg"><i className="fas fa-link"></i></button></a>
                <a href={props.github}><button className="btn btn-lg"><i className="fab fa-github-square"></i></button></a>
            </div>
        </div>
    );
}
export default CharacterCard;