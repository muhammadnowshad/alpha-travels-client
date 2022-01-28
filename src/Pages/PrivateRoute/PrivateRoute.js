import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Navigate, Route } from 'react-router-dom'
import useAuth from "../../Hooks/UseAuth/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/register",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    )
}

export default PrivateRoute
