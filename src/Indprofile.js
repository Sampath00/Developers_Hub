import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
const Indprofile = () => {
    const {fullname}=useParams();
    const {email}=useParams();
    const {id}=useParams();
    const [rating,setRating]= useState(null);
    const[taskprovider,setTaskprovider]= useState(null);
    const submitHandler = e => {
        axios.get('https://localhost:5000/myprofile',
        {
                headers :
            {
                'x-token' : localStorage.getItem('token')
            }
        }
        ).then(res => setTaskprovider(res.data.fullname))

        let review ={
            taskprovider,
            taskworker:{id},
            rating
        }
        axios.post('https://localhost:5000/addreview',review,{
            headers :
            {
                'x-token' : localStorage.getItem('token')
            }
        })
    }
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to="/dashboard"><i className="fas fa-code"></i> Developer Hub</Link>
                </h1>
                <ul>
                    <li><Link to="/myprofile">My Profile</Link></li>
                    <li><Link to="/login">Logout</Link></li>
                </ul>
            </nav>

            <section className="container">
            <Link to="/dashboard" className="btn btn-light">Back To Profiles</Link>
      
            <div className="profile-grid my-1">
                <div className="profile-top bg-primary p-2">
                <img
                    className="round-img my-1"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                />
                <h1 className="large">{fullname}</h1>
                <p className="lead">{email}</p>
                <p>Seattle, WA</p>
                </div>

  
            <div className="profile-github">
                <h2 className="text-primary my-1">
                    Reviews and Ratings
                </h2>
                <div className="repo bg-white p-1 my-1">
                    <div>
                        <h4>Enter Your reviews </h4>
                    <form className="form" autoComplete='off' onSubmit={submitHandler}>
                        <div className="from-group">
                        <input
                            type="text"
                            placeholder="Enter your rating out of 5"
                            name="rating"
                            onChange={e => setRating(e.target.value)}
                            required
                            />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Add Review" />
                    </form>
                </div>
            </div>
            </div>
      </div>
    </section>
        </div>
    )
}

export default Indprofile;