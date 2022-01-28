import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block b-img"
                        src="https://images.pexels.com/photos/325112/pexels-photo-325112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                    />
                    <Carousel.Caption className='pb-5'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block b-img"
                        src="https://images.pexels.com/photos/2647722/pexels-photo-2647722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='pb-5'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block b-img"
                        src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='pb-5'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Banner
