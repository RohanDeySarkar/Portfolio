import React from 'react';
import './Header.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'

function Header() {
    return (
        <div className="header">
            <img
                className="header__image"
                src="https://media-exp1.licdn.com/dms/image/C5603AQGavq3xCx7fBQ/profile-displayphoto-shrink_400_400/0/1614529958951?e=1620259200&v=beta&t=ZB0y2bCZqom2bloSzxOjiVK4jx7WFuHZVbgDSJSrjrE"
                alt=""
            />

            <div className="header__details">
                <div className="header__detailsDescription">
                    <h1>Rohan Dey Sarkar</h1>
                    <h2> - Junior Data Scientist & Full-Stack Developer</h2>
                </div>

                <div className="header__detailsIcons">
                    <LinkedInIcon 
                        onClick={() => window.open("https://www.linkedin.com/in/rohan-dey-sarkar-515523149/", '_blank')}
                    />
                    <GitHubIcon 
                        onClick={() => window.open("https://github.com/RohanDeySarkar?tab=repositories", '_blank')}
                    />
                    <InstagramIcon 
                        onClick={() => window.open("https://www.instagram.com/wr0han/", '_blank')}
                    />
                    <TwitterIcon 
                        onClick={() => window.open("https://twitter.com/deysarkarrohan", '_blank')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
