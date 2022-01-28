import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../Hooks/UseAuth/useAuth'


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const [passDidNotMatch, setPassDidNotMatch] = useState('')
    const history = useNavigate()

    const { registerUser, isLoading, user, authError } = useAuth();

    // console.log(loginData);

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
            setPassDidNotMatch('password did not match');
            return
        }
        else {
            setPassDidNotMatch('')
            registerUser(loginData.email, loginData.password1, loginData.name, history);

        }

    }
    return (
        <>
           <Container className='mx-auto'>
            <h5>CREATE AN ACCOUNT</h5>
                {!isLoading && <Form onSubmit={handleRegistrationSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Col sm="8">
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
                        <Col sm="8">
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
                        <Col sm="8">
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
                        <Col sm="8">
                            <Form.Control
                                type="password"
                                name="password2"
                                placeholder="Confirm Password"
                                onBlur={handleOnBlur}
                            />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-primary" type='submit'>Register</Button>
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

