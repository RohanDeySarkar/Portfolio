import React from 'react';
import './Header.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {ReactComponent as KaggleIcon} from './kaggle.svg'

function Header() {
    return (
        <div className="header">
            <img
                className="header__image"
                src="https://media-exp1.licdn.com/dms/image/C5603AQGavq3xCx7fBQ/profile-displayphoto-shrink_200_200/0/1614529958951?e=1625702400&v=beta&t=dtw9OfDcASQtiNX2ge1VqK-zUFgviJqhFbFWPqrNgdM"
                // src={require("./rohan.jpg")}
                alt=""
            />

            <div className="header__details">
                <div className="header__detailsDescription">
                    <h1>Rohan Dey Sarkar</h1>
                    <h2> - Junior Data Scientist & React Developer</h2>
                </div>

                <div className="header__detailsIcons">
                    <LinkedInIcon 
                        onClick={() => window.open("https://www.linkedin.com/in/rohan-dey-sarkar-515523149/", '_blank')}
                    />
                    <GitHubIcon 
                        onClick={() => window.open("https://github.com/RohanDeySarkar?tab=repositories", '_blank')}
                    />
                    <KaggleIcon
                        style={{
                            height: "4vw",
                        }}
                        className="kaggleIcon" 
                        onClick={() => window.open("https://www.kaggle.com/rohandeysarkar", '_blank')}
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
