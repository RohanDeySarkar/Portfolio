import React from 'react';
import './Body.css';

import Fade from 'react-reveal/Fade';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {skills, projects, aiProjects} from "../data";

import GetAppIcon from '@material-ui/icons/GetApp';

import sampleVideo from '../myVideo.mp4';

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
                    <h1>Machine Learning / AI Projects</h1>

                    <div className="projects">
                        <Carousel infinite={true} autoPlay={true} autoPlaySpeed={1600} responsive={responsive}>
                            {aiProjects.map(({image, title, description, url}) => 
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
                        I am Rohan from Kolkata, B.Tech in Robotics & AI (2021 batch).
                        I have knowledge and has done projects consists of statistics, data wrangling, feature engineering, data analysis, machine learning and deep learning.
                        Worked on kaggle projects and build full stack web pages with with react & node.
                    </p>
                </div>

                <div className="body__card">
                    <h1>VALORANT CLONE</h1>

                    <video 
                        autoPlay 
                        loop 
                        muted
                        style={{
                            // position: "absolute",
                            objectFit: "cover",
                            height: "80%",
                            width: "80%",
                            cursor: "pointer",
                        }}
                        onClick={() => window.open("https://github.com/RohanDeySarkar/RIOT-Games-Clone", '_blank')}
                    >
                        <source src={sampleVideo} type='video/mp4' />
                    </video>
                </div>

                <div className="body__card">
                    <h1>React.js Projects</h1>

                    <div className="projects">
                        <Carousel infinite={true} autoPlay={true} autoPlaySpeed={1600} responsive={responsive}>
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
                    <h1>Skills</h1>

                    <div className="skills">
                        {skills.map((skill) =>
                            <div className="skill"> 
                                <p>{skill}</p>
                            </div>
                        )}
                    </div>
                </div>
                
                <div 
                    className="body__resume"
                    onClick={() => window.open("https://drive.google.com/file/d/1Q-PyyHxJ2i_f592adepwkvYtzm2puT2K/view?usp=sharing", '_blank')}
                >
                    <GetAppIcon />
                    <h1>Resume</h1>
                </div>
                    
            </Fade>
        </div>
    )
}

export default Body
