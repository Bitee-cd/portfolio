import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai';
import '../Components/StyledComponents/WorkCard.css'


function WorkCard({image,title,text,liveLink,gitLink}) {
    return (
        <div className="workCard col-6 col-md-4">
            <Card >
                <a href={liveLink}><Card.Img variant="top" src={image} /></a>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>
                   {text}
                    </p>
                    <div className="d-flex justify-content-end">
                        <a href={gitLink} ><AiFillGithub/></a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WorkCard
