import React from "react"
// import "./style.css"

function CharacterCard(props){
    return(
        <div className="card">
            <div className="img-container" data-id={props.id}>
                <img alt={props.name} src={props.image}/>
                <p>{props.image}</p>
            </div>
            <div className="card-body">
                <h1>{props.name}</h1>
                <a href={props.link}><button><i className="fas fa-link"></i></button></a>
                <a href={props.github}><button><i className="fab fa-github-square"></i></button></a>
            </div>
        </div>
    );
}
export default CharacterCard;