import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/useAuth';
import './Nav.css'


const Nav = () => {

    const {user, admin, logout} = useAuth();

    return (
        <div className='my-navigation p-0 m-0'>
            <nav className="navbar navbar-expand-lg navbar-light my-bg">  
                <div className="container">
                    <span className="navbar-brand fs-3 text-white">Alpha Travels</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blogs">Blogs</Link>
                            </li>
                            {
                                !admin?
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-white " data-bs-toggle="dropdown" role="button" aria-expanded="false" to="/Dashboard">Dashboard</Link>
                                    <ul className="dropdown-menu p-0">
                                        <li>
                                            <Link className="dropdown-item nav-link  my-hover" to="/publishBlog">Publish Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link  my-hover" to="/myBlog">My Blog</Link>
                                        </li>
                                        <li>
                                            {
                                                user.email ?
                                                <Link className="dropdown-item nav-link my-hover" onClick={logout}  to="/home">Log Out</Link>
                                                :
                                                <Link className="nav-link nav-item my-hover" to="/login">Login</Link>
                                            }
                                        </li>
                                    </ul>
                                </li>
                                :
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-white " data-bs-toggle="dropdown" role="button" aria-expanded="false" to="/admin">Admin</Link>
                                    <ul className="dropdown-menu p-0">
                                        <li>
                                            <Link className="dropdown-item nav-link my-hover" to="/manageBlogs">Manage Blogs</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link my-hover" to="/addBlog">Add Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/approvalBlog">Approval Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item nav-link text-white my-hover" to="/makeAdmin">Make Admin</Link>
                                        </li>
                                        <li>
                                            {
                                                user.email ?
                                                <Link className="dropdown-item nav-link
                                                my-hover" onClick={logout}  to="/home">Log Out</Link>
                                                :
                                                <Link className="nav-link nav-item
                                                my-hover" to="/login">Login</Link>
                                            }
                                        </li>
                                    </ul>
                                </li>
                            
                            }
                            {
                                user.email ?
                                <li className="nav-item">
                                    <Link className="nav-link text-white" onClick={logout} to="/home">Log Out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                </li>
                            }
                            <li className="nav-item">
                                <span className="nav-link text-warning" >{user.displayName}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;