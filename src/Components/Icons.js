import React from 'react'
import './StyledComponents/Icons.css'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPhoneSquare} from 'react-icons/fa';



function Icons() {
    return (
        <div className="icons">
            <div className="text">
                <a href="https://github.com/Bitee-cd"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/caleb-duniya-4a5751202/"><FaLinkedin /></a>
                <a href="https://twitter.com/CalebBitiyong?s=09"><FaTwitterSquare /></a>
                <a href="https://www.instagram.com/bi.tee/"><FaInstagramSquare /></a> 
                <a href="tel:07062314249"><FaPhoneSquare/></a> 
            </div>
        </div>
    )
}

export default Icons
