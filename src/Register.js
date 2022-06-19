import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Register = () => 
{
  const[data,setData]=useState(
    {
        fullname:'',
        email:'',
        mobile:'',
        skills:'',
        password:'',
        confirmpassword:''
    }
)
const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e => {
    e.preventDefault();
    console.log(data)
}
  return(
    <div>
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> Developers Hub</Link>
      </h1>
      <ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={submitHandler} action="create-profile.html">
        <div className="form-group">
          <input type="text" placeholder="Name" name="fullname" 
          onChange={changeHandler} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" onChange={changeHandler} required/>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
            <input type="text" placeholder="Skills" name='skills' onChange={changeHandler}/>
            <small>
                Please provide skills by spearation of coma<b>( , )</b>
            </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={changeHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
    </div>
  )
}

export default Register;