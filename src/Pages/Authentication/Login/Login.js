import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner, } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle, navigate } = useAuth();
    const history = useNavigate();
    const location = useLocation();
    // console.log(loginData);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        // console.log(field, value, newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();

        loginUser(loginData.email, loginData.password, history, location);
        return
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <>
            <Container>
                <h5>Login</h5>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control name="email" type="email" placeholder="Email" onChange={handleOnChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleOnChange} />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-primary" type='submit' >Login</Button>
                    <Link  to='/register'><p className="">New User?</p></Link>
                </Form>

                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {user?.email && [
                    'success'
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        Login Success
                    </Alert>
                ))}
                {authError && [
                    'danger'
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        {authError}
                    </Alert>
                ))}

                <div className='my-4 d-flex justify-content-center align-items-center'>
                    <h3 className='me-5'>Also Signin</h3>
                    <button className='btn btn-danger py-2' onClick={handleGoogleSignIn}>Google Sign In</button>
                </div>

            </Container>
        </>
    )
}

export default Login
