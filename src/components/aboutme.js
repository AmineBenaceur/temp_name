import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ProfilePhoto from './ProfilePhoto.png';
import UIDesign from './UIDesign.png';
import FullStack from './FullStack.png';
import BugIcon from './BugIcon.jpg';

class About extends Component{
    render(){
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={5}>
                        <div className="ProfilePhoto-container">
                        <img
                            src={ProfilePhoto}
                            alt=""
                            className="profile-img"
                        />
                        
                        </div>
                       
                    </Cell>
                    <Cell col={7}>
                        <div className="about-me-text">
                            <h2 >   Who I Am </h2>
                            {/* <hr/> */}
                            <p> <span className="about-me-span"> Hello! I'm <strong>Amine</strong>, a <strong>Software Engineering</strong> student based in <strong>Calgary, AB </strong> who enjoys building things that live on the internet. I develop exceptional <strong>Websites</strong> and <strong> Web Apps</strong> that provide intuitive, pixel-perfect <strong> User Interfaces </strong> with efficient and <strong>Modern Backends </strong>. My intrests include Web-System Design, Tech-entrepeneurship and Human-Computer Interaction but are growing everyday. When I'm not on my MacBook, I prefer to be playing sports or enjoying the outdoors. </span>  </p>
                        </div>
                        <br/>
                        {/* <hr/> */}
                        <div className="about-me-photos">
                            <h2> What I Offer </h2>
                            
                            <div className="row">
                                <div className="column">
                                    <img src={UIDesign} alt="Snow" />
                                    <p><strong>Elegant UI Design</strong></p>
                                </div>
                                <div className="column">
                                    <img src={FullStack} alt="Forest" />
                                    <p> <strong>Full Stack Development</strong></p>
                                </div>
                                <div className="column">
                                    <img src={BugIcon} alt="Mountains" />
                                    <p> <strong>Testing & Quality Assurance</strong></p>
                                </div>
                            </div>
                        </div>

                    </Cell>

                
                </Grid>
            </div>
        )
    }
}

export default About ;