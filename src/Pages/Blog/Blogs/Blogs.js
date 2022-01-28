import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap'
import Blog from '../Blog/Blog';


const Blogs = () => {

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


    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <h2 className='mb-4'>Our Blogs</h2>
                    <Row className="g-4">
                    
                        {   
                            datas.map(datum => <Blog key={datum.id} datum={datum}></Blog>)
                            
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
    );
};

export default Blogs;