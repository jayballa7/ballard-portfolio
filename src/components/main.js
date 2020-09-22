import React from 'react';
import '../styles/main.css';
import Header from "./Header.js";
// import Footer from "../components/Footer.js";
import ProfilePic from "../img/profile-photo.jpg";
import NewsFlash from "../img/newsflash.png";
import CrimeRadar from "../img/crimeradar.png";
import Rendezvous from "../img/rendezvous.png";



function About() {

    return(

        <div className="about-wrapper">
            <div className = "menu-toggler">
                <div className = "bar half start"></div>
                <div className = "bar"></div>
                <div className = "bar end"></div>
            </div>
            <nav className = "top-nav">
                <ul className = "nav-list">
                    <li>
                        <a href="index.html" className = "nav-link">Home</a>
                        <a href="#portfolio" className = "nav-link">Portfolio</a>
                        <a href="#about" className = "nav-link">About</a>
                        <a href="#contact" className = "nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
            <Header />

            <section className = "about" id= "about">
                <div className = "container">
                    <div className = "profile-img">
                    <img src={ProfilePic} className = "profile-pic"></img>
                    </div>
                    <div className = "about-details">
                        <div className = "about-heading">
                            <h1>About</h1>
                            <h6>Myself</h6>
                        </div>
                        <p>blah blah blah blah</p>
                    </div>
                    <div className = "social-media">
                        <ul className = "nav-list">
                            <li>
                                <a href="#" className = "icon-link">
                                    <i className = "fab fa-facebook-square"></i>
                                    <i className = "fab fa-facebook-square"></i>
                                    <i className = "fab fa-facebook-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className = "portfolio" id = "portfolio">
                <div className = "container">
                    <div className = "section-heading">
                        <h1>Portfolio</h1>
                        <h6>View some of my recent work</h6>
                    </div>
                    <div className = "portfolio-item">
                    <div className = "portfolio-description">
                            <h6>Website</h6>
                            <h1>NewsFlash</h1>
                            <p>blah blah blah</p>
                        </div>
                        <img src={NewsFlash} className = "portfolio-pic"></img>
                            {/* <img src=""></img> */}
                        </div>
                        <a href = "#" className = "cta">View Details</a>
                    </div>
                    <div className = "portfolio-item">
                        <div className = "portfolio-img">
                        <img src={CrimeRadar} className = "portfolio-pic"></img>
                        </div>
                        <div className = "portfolio-description">
                            <h6>Website</h6>
                            <h1>Crime Radar</h1>
                            <p>blah blah blah</p>
                        </div>
                        <a href = "#" className = "cta">View Details</a>
                    </div>
                    <div className = "portfolio-item">
                        <div className = "portfolio-img">
                        <img src={Rendezvous} className = "portfolio-pic"></img>
                        </div>
                        <div className = "portfolio-description">
                            <h6>Website</h6>
                            <h1>Rendezvous</h1>
                            <p>blah blah blah</p>
                        </div>
                        <a href = "#" className = "cta">View Details</a>
                    </div>
            </section>

            <section className = "contact" id = "contact">
                <div className = "container">
                    <div className = "section-heading">
                        <h1>Contact</h1>
                        <h6>Let's work together</h6>
                    </div>
                    <form action="">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." required></input>
                        <label for="email">Email:</label>
                        <input type="email" id="name" name="email" placeholder="Enter your email..." required></input>
                        <label for="service">Services:</label>
                        <select name="services" id="services">
                            <option value="">Web Design</option>
                            <option value="">Web Development</option>
                            <option value="">Web Design/Development</option>
                        </select>
                        <label for="subject">Subject:</label>
                        <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                        <input type = "submit" value="Submit"></input>
                    </form>
                </div>
            </section>

            <footer className = "copyright">
                <div className = "up" id="up">
                    <i className = "fas fa-chevron-up"></i>
                    <p>&copy; 2020 Jennifer Ballard</p>
                </div>
            </footer>

        </div>
    )
}

export default About;