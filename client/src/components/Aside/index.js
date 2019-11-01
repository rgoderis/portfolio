import React from "react";
import images from "../../images/Headshot.jpg";
import "./style.css";

function Aside(){
    return (
        <div className="jumbotron col-4 m-0 p-0 bg-secondary">
            <div className="row justify-content-center container m-0 p-0">
                <img src={images} className="img-thumbnail m-0 p-0" id="profile-image" alt="Profile Picture"/>
            </div>
            <div className="container">
                <h3 className="text-center mt-5 mb-5 text-white">Full Stack Developer and Caffeine Addict</h3>
                <div id="about" className="text-center">
                    <p className="text-white">Full Stack JavaScript developer that excels in all work environments with a demonstrated ability to learn new skills and quickly adapt. 
                        Skilled with with front and back end languages as well as server side specific frameworks and databases. 
                        A quick learner that is enthusiastic in tackling new challenges with a passion for growing and developing as a programer.</p>
                </div>
                <div id="contact" className="text-center">
                    <h4 href="rgoderis789@gmail.com" className="text-white"><i class="fas fa-at"></i> rgoderis789@gmail.com</h4>
                    <h4><a href="https://www.linkedin.com/in/ryan-goderis" className="text-white"><i class="fab fa-linkedin"></i> www.linkedin.com/in/ryan-goderis</a></h4>
                    <h4><a href="https://github.com/rgoderis" className="text-white"><i class="fab fa-github-square"></i> github.com/rgoderis</a></h4>
                </div>
            </div>
        </div>
    )
}
export default Aside