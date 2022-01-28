import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Blogs from './Pages/Blog/Blogs/Blogs';
import BlogDetails from './Pages/Blog/BlogDetails/BlogDetails';
import Nav from './Pages/Shared/Nav/Nav';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/AdminPanel/Make Admin/MakeAdmin';
import ManageBlogs from './Pages/AdminPanel/Manage Blogs/ManageBlogs';
import ApprovalBlog from './Pages/AdminPanel/ApprovalBlog/ApprovalBlog';
import AddBlog from './Pages/AdminPanel/Add Blog/AddBlog';
import PublishBlog from './Pages/UserPanel/Publish Blog/PublishBlog';
import MyBlog from './Pages/UserPanel/My Blog/MyBlog';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
        <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
            <Route path="/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
            <Route path="/manageBlogs" element={<PrivateRoute><ManageBlogs /></PrivateRoute>} />
            <Route path="/approvalBlog" element={<PrivateRoute><ApprovalBlog /></PrivateRoute>} />
            <Route path="/addBlog" element={<PrivateRoute><AddBlog /></PrivateRoute>} />
            <Route path="/publishBlog" element={<PrivateRoute><PublishBlog /></PrivateRoute>} />
            <Route path="/myBlog" element={<PrivateRoute><MyBlog /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
        <Footer></Footer>  
      </AuthProvider>
    </>
  );
}

export default App;
