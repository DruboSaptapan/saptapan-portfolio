import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Typical from 'react-typical'
import saptapan from '../../pictures/saptapan.jpg';

const Banner = () => {
    return (
        <div style={{ backgroundColor: 'rgb(43, 50, 58)' }}>
            <Container className="pt-lg-0 pt-3">
                <Row className="align-items-center mb-4 py-4 flex-column flex-lg-row" >
                    <Col className="text-start">
                        <h1 className="text-light fw-bold">I'm Saptapan Barua</h1>
                        <Typical className="text-light fw-bold mt-3 mb-4" steps={['I\'m Web developer.', 1000, 'I\'m React Developer.', 2500]}
                            loop={Infinity}
                            wrapper="h2"
                            color="white"
                        />
                        <div>
                            <a href="https://drive.google.com/uc?export=download&id=1hQxGU44-55Z7qoDXEtRH4CzLT0vAHQKD" style={{ textDecoration: 'none' }} download="saptapan_barua.pdf">
                                <button className="btn" style={{ color: 'white', backgroundColor: '#846add' }}>Download resume</button>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <Container className="mt-5 mt-lg-0">
                            <Row className="text-right text-lg-center ">
                                <Col>
                                    <Image src={saptapan} className='w-75 rounded-circle' fluid alt="hero" />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;