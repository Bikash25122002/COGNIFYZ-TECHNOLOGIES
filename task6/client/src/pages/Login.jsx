import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
function Login() {
    const Navigate=useNavigate()
    const [user, setUser] = React.useState({ email: "", password: "" })
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", user, {
                withCredentials: true,
            });
            console.log(response.data);
            if(response.status){
                // alert(response.data);
                Navigate("/userprofile",)
            }
        } catch (error) {
            // alert(error.response.data)
            console.log(error)

        }

    }
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 border rounded p-4">
                <h1 className='text-center'>Sign in</h1>

                <form action='/login' method='post' onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} name='email' required/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChange} name='password' required/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>Sign in</button>
                    <div className="mt-3 text-center">
                        Don't have an account? <Link to="/">Sign up</Link> {/* Link to the registration page */}
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
