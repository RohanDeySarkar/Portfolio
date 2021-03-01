import React from 'react';
import './Body.css';

import Fade from 'react-reveal/Fade';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {skills, projects} from "../data";

import GetAppIcon from '@material-ui/icons/GetApp';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Body() {
    return (
        <div className="body">
            <Fade bottom>
                <div className="body__card">
                    <h1>Projects</h1>

                    <div className="projects">
                        <Carousel responsive={responsive}>
                            {projects.map(({image, title, description, url}) => 
                                <div 
                                    className="project"
                                    onClick={() => window.open(url, '_blank')}
                                >
                                    <img
                                        src={image}
                                        alt=""
                                    />
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>

                <div className="body__card">
                    <h1>About Me</h1>

                    <p>
                        I am a junior data scientist and a web developer.
                        I am coding in JavaScript & Python for almost 3 years.
                        Done internships & currently a freelancer
                        I am open for full time and contract works
                    </p>
                </div>

                <div className="body__card">
                    <h1>Skills</h1>

                    <div className="skills">
                        <Fade bottom>
                            {skills.map((skill) =>
                                <div className="skill"> 
                                    <p>{skill}</p>
                                </div>
                            )}
                        </Fade>
                    </div>
                </div>

                
                
                <div 
                    className="body__resume"
                    onClick={() => window.open("https://drive.google.com/file/d/1EgoBtxTVTWi1La-zpZYjeMc-nTTriNaC/view?usp=sharing", '_blank')}
                >
                    <GetAppIcon />
                    <h1>Resume</h1>
                </div>
                    
            </Fade>
        </div>
    )
}

export default Body
