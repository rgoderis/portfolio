import React from "react"
import "./style.css"

function CharacterCard(props){
    return(
        <article className="card">
             <h1 className="card-header text-center">{props.name}</h1>
            <figure className="img-container" data-id={props.id}>
                <img className="project-img" alt={props.name} src={props.image}/>
            </figure>
            <section className="card-body text-center">
                <a href={props.link}><button className="btn btn-lg"><i className="fas fa-link"></i></button></a>
                <a href={props.github}><button className="btn btn-lg"><i className="fab fa-github-square"></i></button></a>
            </section>
        </article>
    );
}
export default CharacterCard;