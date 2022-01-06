import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { ImEye } from "react-icons/im";
import ModalImage from "react-modal-image";
import Slider from 'react-slick';

import './Project.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

const Project = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/projects/main/projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    const projectInfo = project.find(project => project.id === projectId)
    // console.log(projectInfo)
    // const projectInfo = project.find(project => console.log(project.projectPics))

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={5} className="flex-column flex-lg-row">
                    {/* <Image src={projectInfo?.projectImg} fluid /> */}
                    <Slider {...settings}>
                        {
                            projectInfo?.projectPics.map(projectPic =>
                                <div className="image">
                                    <Image src={projectPic} className="border my-2" fluid alt="" />
                                </div>
                            )
                        }
                    </Slider>
                </Col>
                <Col xs={12} md={7} className="text-start px-3 px-lg-0 mt-3 mt-lg-0">
                    <h2>{projectInfo?.name}</h2>
                    <p>{projectInfo?.description}</p>
                    <p>Live site : <a href={projectInfo?.projectLink} rel="noreferrer" target="_blank">{projectInfo?.projectLink}</a></p>
                    <p>Client Code : <a href={projectInfo?.clientCode} rel="noreferrer" target="_blank">{projectInfo?.clientCode}</a></p>
                    {
                        projectInfo?.serverCode ? <p>Server Code : <a href={projectInfo?.serverCode} rel="noreferrer" target="_blank">{projectInfo?.serverCode}</a></p> : <p></p>
                    }

                    <Row className="flex-row">
                        {
                            projectInfo?.projectPics.map(projectPic =>
                                <Col xs={5} md={5} lg={3}>
                                    <div className="picture">
                                        <ModalImage small={projectPic} medium={projectPic} large={projectPic} alt={projectPic?.name} hideDownload={true} className="my-2 image" />
                                        <div className="overlay">
                                            <ImEye className="icon"/>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container >
    );
};

export default Project;