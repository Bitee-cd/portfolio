import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';

function Footer() {
    return (
        <div className="footer">
            <nav class="navbar fixed-bottom navbar-light bg-light">
                <div class="container d-flex justify-content-center">
                    
                        copyright © 2022<br></br>
                        <div className="mx-3">BIT33</div>
                        
                        <a href="https://github.com/Bitee-cd" className="navbar-brand"><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/caleb-duniya-4a5751202/"  className="navbar-brand"><AiFillLinkedin /></a>
                        <a href="https://twitter.com/CalebBitiyong?s=09"  className="navbar-brand"><BsTwitter  /></a>
                        <a href="https://www.instagram.com/bi.tee/"  className="navbar-brand"><AiFillInstagram /></a> 
                        <a href="tel:07062314249"  className="navbar-brand"><AiFillPhone/></a>
                        <div className="me-3">  07062312429 </div>
                        <div><HiLocationMarker/>Kaduna, Nigeria </div>
                      
                        
                    </div>
                
            </nav>
            <div className="text">
               
            </div>
        </div>
    )
}

export default Footer
