import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/projects/main/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch((e) => { })
    }, [])
    return (
        <div id="projects">
            <h2 style={{ margin: '0 25px' }} className="fw-bold text-center">Latest projects</h2>
            <Container className="mt-5 mb-4" >
                <CardGroup>
                    <Row xs={1} md={2} lg={3}>
                        {
                            projects.map
                                (project =>
                                    <Col className="col-lg-4 col-12" key={project.key}>
                                        <Card className="project-card px-0 my-2" style={{ margin: '2px 0' }}>
                                            <Card.Img variant="top" src={project.projectImg} />
                                            <Card.Body className="text-box text-center">
                                                <Card.Title className="bg-transparent">{project.name}</Card.Title>
                                                <Card.Text className="bg-transparent">{project.description}</Card.Text>
                                                <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                                    <Button variant="primary" className="btn-sm" project={project}>See more</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                        }
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Projects;
