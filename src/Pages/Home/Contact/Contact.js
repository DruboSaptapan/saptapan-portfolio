import React, { useRef, useState } from 'react';
import contactPic from '../../pictures/contact.png'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Col, Container, Form, Image, Row } from 'react-bootstrap';
import { RiSendPlaneFill } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { reset } = useForm();
    const [open, setOpen] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        reset();

        emailjs.sendForm('service_uiwh8un', 'template_rnc2xar', form.current, 'user_hj167X2OktUIx6Kqz8zkB')
            .then((result) => {
                setOpen(true)
            }, (error) => {
                setOpen(false)
                console.log(error.text);
            });
        toast.success('Message\'s sent successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
        });
    };

    return (
        <div id="contact">
            <Container>
                <Row className="align-items-center mb-4 py-4">
                    <Col className="d-none d-lg-block">
                        <Image src={contactPic} roundedCircle fluid alt="contact" />
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <h2 style={{ margin: '0 15px' }} className="fw-bold">Contact me</h2>
                                <Col className="my-4">
                                    <form ref={form} onSubmit={sendEmail}>

                                        <Form.Group className="mb-3 text-start">
                                            <label htmlFor="floatingInputCustom" className="mb-2">Your name</label>
                                            <Form.Control id="floatingInputCustom" name="user_name" type="text" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3 text-start">
                                            <label htmlFor="floatingInputCustom" className="mb-2">Email address</label>
                                            <Form.Control id="floatingInputCustom" name="reply_to" type="email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3 text-start">
                                            <label htmlFor="floatingInputCustom" className="mb-2">Type your message </label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} name="message" type="text"/>
                                        </Form.Group>

                                        <button type="submit" value="Send" className="btn mt-2" style={{ color: 'white', backgroundColor: '#846add' }}>Send Message <RiSendPlaneFill className="text-light"/></button>
                                        {
                                            open && <ToastContainer
                                                position="top-right"
                                            />
                                        }
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;