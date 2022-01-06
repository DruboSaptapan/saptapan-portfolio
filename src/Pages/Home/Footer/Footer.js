import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const iconStyle = {
    fontSize: '32px',
    textDecoration: 'none',
}

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(43, 50, 58)' }}>
            <Container className="py-4">
                <Row className="mx-auto text-center">
                    <Col className="text-light">
                        <a href="https://github.com/DruboSaptapan" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><FaGithub style={{ ...iconStyle, color: 'black' }} /></a>
                        <a href="https://www.linkedin.com/in/saptapan-barua-6ba26819a/" target="_blank" rel="noreferrer" style={{ margin: '0 10px' }}><FaLinkedinIn style={{ ...iconStyle, color: '#0077b5', }} /></a>
                        <p className="mt-4">Copyright © 2021 | This website is made by <span className="fw-bold">Saptapan Barua</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;