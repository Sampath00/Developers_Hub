import React,{useState} from 'react'
import {Link,Navigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [auth,setAuth] = useState(false);
    const[data,setData]=useState(
        {
            email:'',
            password:'',
        }
    )
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
          res=>{localStorage.setItem('token',res.data.token);setAuth(true)}
          
        )
    }
   if(auth){
    // console.log('Auth conformed')
       return <Navigate to='/dashboard'/>
    }
  return (
    <div>
       <nav className="navbar bg-dark">
      <h1>
            <Link to="/index"><i className="fas fa-code"></i> Developer Hub</Link>
      </h1>
      <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    <section className="container">
      {/* <div className="alert alert-danger">
        Invalid credentials
      </div> */}
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={submitHandler} autoComplete="off">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section> 
    </div>
  )
}

export default Login;