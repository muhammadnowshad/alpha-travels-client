import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({datum}) => {

    const {title, location, img, _id, rating} = datum;

    return (
        <>
            <Col className='' lg={4} md={6} sm={12}>
                <Card className='d-flex justify-content-center align-items-center'>
                    <Card.Img className='blog-img' variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className=''>
                        <Link to={`/blogs/${_id}`}>{title}</Link>
                    </Card.Title>
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        <div>
                            <i className="fas fa-map-marker-alt my-color"></i>
                            <span>&nbsp;{location}</span>
                        </div>
                        <div>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <span>&nbsp;{rating}</span>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Blog;