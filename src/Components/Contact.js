import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Form, Row, FloatingLabel } from 'react-bootstrap'
import './StyledComponents/Contact.css'
import Swal from 'sweetalert2';


function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hhu06t9', 'template_24th4tc', form.current, 'user_JExhEkHR2XNrkVFWngsFl')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: 'Message Sent Successfully'
              })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                title: 'Ooops, something went wrong',
                text: error.text,
              })
        });
    };

    return (
        <div className="contact container">
            <div className="row">

                <div className="col-12 col-md-5 textBox">
                        <div>
                        <h2><span>Get in Touch</span></h2>
                            <p>Do you want to hire me?
                                <br></br> Send me a message</p>
                        </div>
                        
                    
                </div>
                <div className="col-12 col-md-7 messageBox">
                    
            <Form  ref={form} onSubmit={sendEmail}> 
               
                <Row className="mb-3">
                    <div className="col-12 col-md-6">
                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="your name"
                            type='text'
                            name="user_name"
                            />
                            <label htmlFor="floatingInputCustom">Name</label>
                        </Form.Floating>
                    </div>

                    <div className="col-12 col-md-6">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                                name="user_name"
                                    />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                    </div>
                </Row>

                <Row>
                    <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                        <Form.Control
                        as="textarea"
                            placeholder="Your Message"
                            style={{ height: '200px' }}
                            name="message"
                        />
                    </FloatingLabel>
                </Row>  
                <input type="submit" value="Send message" className="btn btn-outline-dark mt-3" ></input>
            </Form>
                </div>  
            </div>
        </div>
    )
}

export default Contact
//service_hhu06t9
