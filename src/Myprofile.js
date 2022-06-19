import React,{useState,useEffect} from 'react'
import {Link,Navigate} from 'react-router-dom';
import axios from 'axios'
const Myprofile = () => {
    const[data,setData]=useState(null);
    const [review,setReview]=useState([]);
    useEffect(()=>{
            axios.get('http://localhost:5000/myprofile',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res=> setData(res.data))
            axios.get('http://localhost:5000/myreview',{
                headers : {
                    'x-token' : localStorage.getItem('token')
                }
            }).then(res=> setReview(res.data))
    },[])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login'/>
    }
  return (
    <div>
        <nav class="navbar bg-dark">
            <h1>
                <Link to="/"><i class="fas fa-code"></i> Developer Hub</Link>
            </h1>
            <ul>
                <li><Link to="/myprofile">My Profile</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
        </nav>
    {data &&
    <section class="container">
      <Link to="/myprofile" class="btn btn-light">Back To Profiles</Link>
      
      <div class="profile-grid my-1">
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h1 class="large">{data.fullname}</h1>
          <p class="lead">{data.email}</p>
          <p>Seattle, WA</p>
        </div>

        <div class="profile-github">
            <h2 class="text-primary my-1">
                <i class="fab fa-github"></i> Reviews and Ratings
            </h2>
            <div class="repo bg-white p-1 my-1">
                {review && 
                    review.map(review=>
                        <div>
                    <h4><Link to="#">{review.taskprovider}</Link></h4>
                    <p>
                        {review.rating}/5
                    </p>
                    </div>
                    )
                }  
            </div>
            <div class="repo bg-white p-1 my-1">
                <h4>Enter your review</h4>
                <form class="form" autoComplete='off'>
                    <div class="from-group">
                      <input
                        type="text"
                        placeholder="Enter your rating out of 5"
                        name="rating"
                        required
                        />
                    </div>
                    <input type="submit" class="btn btn-primary" value="Add Review" />
                </form>
            </div>
        </div>
      </div>
    </section>
}
    </div>
  )
}

export default Myprofile;