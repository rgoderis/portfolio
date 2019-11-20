import React from "react";
import images from "../../images/LowRezHeadshot.jpg";
import "./style.css";

function Aside(){
    return (
        <section className="jumbotron col-12 m-0 p-5 bg-dark">
            <figure className="text-center container">
                <img src={images} className="img-thumbnail m-0 p-0 text-center" id="profile-image" alt="Profile"/>
            </figure>
            <main className="container">
                <h2 className="text-center mt-5 mb-5 text-white">Full Stack Developer and Caffeine Addict</h2>
                <section id="about" className="text-center">
                    <p className="text-white body">Full Stack JavaScript developer that excels in all work environments with a demonstrated ability to learn new skills and quickly adapt. 
                        Skilled with with front and back end languages as well as server side specific frameworks and databases. 
                        A quick learner that is enthusiastic in tackling new challenges with a passion for growing and developing as a programer.</p>
                </section>
                <section id="contact" className="text-center">
                    <h3 href="rgoderis789@gmail.com" className="text-white contact"><i className="fas fa-at"></i> rgoderis789@gmail.com</h3>
                    <h3><a href="https://www.linkedin.com/in/ryan-goderis" className="text-white contact"><i className="fab fa-linkedin"></i> www.linkedin.com/in/ryan-goderis</a></h3>
                    <h3><a href="https://github.com/rgoderis" className="text-white contact"><i className="fab fa-github-square"></i> github.com/rgoderis</a></h3>
                </section>
            </main>
        </section>
    )
}
export default Aside