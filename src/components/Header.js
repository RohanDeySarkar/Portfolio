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
                src="https://instagram.fccu3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/144312926_229827338478056_3526706425058357547_n.jpg?_nc_ht=instagram.fccu3-1.fna.fbcdn.net&_nc_ohc=c0qH2-HLMooAX8rtnkj&tp=1&oh=ccef449a5fbd2418f6813c3bb8491f84&oe=60474507"
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
