import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetails = ({datum}) => {

    const {blogId} = useParams();
    const [blog, setBlog] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/blogs/${blogId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [blogId]);

    return (
        <>
        <Container className='my-5 w-75'>
            <div className='text-center'>
                <img src={blog.img} alt="" height={450}  className='w-100' />
            </div>
            <div className='d-flex mt-2 justify-content-between align-items-center'>
                <span>{blog.time}, {blog.date}</span>
                <div>
                    <i className="fas fa-map-marker-alt my-color"></i>
                    <span>&nbsp;{blog.address}, {blog.location}</span>
                </div>
            </div>
            <div>
                <span className='pe-5'>Cost: ${blog.expence}</span>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <span> {blog.rating}</span>
            </div>
            <h2 className='mt-3'>{blog.title}</h2>
            <p className='my-text fs-5'>{blog.info}</p>
            <p className='my-text fs-5'>{blog.description}</p>
        </Container>
        </>
    );
};

export default BlogDetails;