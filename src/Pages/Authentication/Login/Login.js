import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row, Spinner, } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/useAuth';
import './Login.css'

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
            <Container className='py-5'>
                <h5>Login</h5>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control name="email" type="email" placeholder="Email" onChange={handleOnChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleOnChange} />
                        </Col>
                    </Form.Group>
                    <Button variant="success" className='px-4' type='submit' >Login</Button><br /><br />
                    <Link  to='/register'><p className="">New User?</p></Link>
                </Form>

                {isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}

                <div className='my-4 d-flex align-items-center'>
                    <h4 className='me-5'>Also Signin</h4>
                    <Button variant="success" className='py-2' onClick={handleGoogleSignIn}>Google Sign In</Button>
                </div>

            </Container>
        </>
    )
}

export default Login
