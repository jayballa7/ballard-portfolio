import React from 'react';
// import '../styles/About.scss';
import Header from "./Header.js";
// import Footer from "../components/Footer.js";
// import ProfilePic from "../img/profile-photo.jpg";



function About() {

    return(

        <div className="about-wrapper">
            <Header />
            <div className = "about-content">
                {/* <div className = "pic-div">
                    <img src={ProfilePic} className = "profile-pic"></img>
                </div> */}
                <div className = "about-text">
                    <p>I am a Full Stack Web Developer currently settled in the greater Seattle area. In May of 2020, I received a Certificate from the University of Washington Coding Bootcamp. I specialize in Virtual Studio Code, Git Bash, GitHub, HTML, CSS, CSS Grid, Sass, Bootstrap, JavaScript, jQuery, Node.js, Express, Mysql, MongoDB, and React. My favorite part about web development is designing the user interface. </p>
                    <p>In my free time I enjoy going to concerts, watching movies, playing soccer, watching sports (Go Hawks!), and spending time with my two new kittens, Taco & Tequila. A dream of mine is to become an astronaut.</p>
                </div>
            </div>
{/* 
            <div className = "footer">
            <Footer />
            </div> */}
        </div>
    )
}

export default About;