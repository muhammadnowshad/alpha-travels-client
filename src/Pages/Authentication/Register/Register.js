import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../Hooks/UseAuth/useAuth'


const Register = () => {

    const [loginData, setLoginData] = useState([]);
    const [passDidNotMatch, setPassDidNotMatch] = useState('')
    const { user, registerUser, isLoading, authError } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }

    const handleRegistrationSubmit = e => {
        e.preventDefault();
        if (loginData.password1 !== loginData.password2) {
            setPassDidNotMatch('Your password did not match');
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate, location);
    }

    return (
        <>
           <Container className='py-5'>
            <h5>CREATE AN ACCOUNT</h5>
                {!isLoading && <Form onSubmit={handleRegistrationSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                sm="8"
                                type="name"
                                name="name"
                                onBlur={handleOnBlur}
                                placeholder="Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="password"
                                name="password1"
                                placeholder="Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Re-Type Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="password"
                                name="password2"
                                placeholder="Confirm Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="success" type='submit'>Register</Button><br /><br />
                    <Link  to='/login'><p className="">Already Register?</p></Link>
                </Form>}

                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {user?.email && [
                    'success'
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        Registration Success
                    </Alert>
                ))}
                {authError && [
                    'danger'
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        {authError}
                    </Alert>
                ))}
                {passDidNotMatch && [
                    'danger'
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        {passDidNotMatch}
                    </Alert>
                ))}
           </Container> 
        </>
    )
}

export default Register

