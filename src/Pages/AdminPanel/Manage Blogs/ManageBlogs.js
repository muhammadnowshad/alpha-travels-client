import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageBlogs = () => {

    const [datas, setDatas] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    
    useEffect(() => {
        fetch(`https://floating-spire-61483.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://floating-spire-61483.herokuapp.com/blog/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = datas.filter(datum => datum._id !== id);
                        setDatas(remainingUsers);
                    }
                });
        }
    }
    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <h2 className='mb-4'>Our Blogs</h2>
                    <Row className="g-4">
                    
                        {   
                            datas.map(datum => {
                                
                                const {title, location, img, _id, rating} = datum;

                                return(
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
                                            <div className='d-flex justify-content-center'>
                                                <Button variant='danger' className='me-4' onClick={() => handleDeleteUser(datum._id)}>Delete</Button>
                                                <Link to={`/blogs/update/${datum._id}`}>
                                                    <Button variant='success'>Update</Button>
                                                </Link>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                            
                        }

                    </Row>
                    <div className="pt-3">
                    
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <Button style={{marginRight: '10px'}}
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}
                            >{number + 1}</Button>)
                    }
                </div>
                </div>
            </div>
        </>
        
    )
};

export default ManageBlogs;

// {/* <div>
//             <h2>Users Available: {users.length} </h2>
//             <ul>
//                 {
//                     users.map(user => <li
//                         key={user._id}
//                     >{user.name} :: {user.email}
//                         <Link to={`/users/update/${user._id}`}><button>Update</button></Link>
//                         <button onClick={() => handleDeleteUser(user._id)}>X</button>
//                     </li>)
//                 }
//             </ul>
//         </div> */}