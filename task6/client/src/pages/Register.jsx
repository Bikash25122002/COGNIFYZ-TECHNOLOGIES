import React from 'react'
import {Link, useNavigate,} from "react-router-dom"
import axios from 'axios';
function Register() {
    const Navigate=useNavigate();
    const [user, setUser] = React.useState({ name: "", email: "", password: "", cpassword: "" })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(user)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*\d).{6,}$/;

        if (user.name.length < 2) {
            alert("First name must be at least 2 characters long")
        }
        else if (!emailRegex.test(user.email)) {
            alert('Please enter a valid email address')
        }
        else if (!passwordRegex.test(user.password)) {
            alert(`password shoul atleast 6 characters and give strong password`)

        }
        else {
            if (user.password !== user.cpassword) {
                alert("Password does not match.")
            } else {
               try {
                const response = await axios.post("http://localhost:3000/", {
                    ...user,
                  }, {
                    withCredentials: true,
                  })
                console.log(response.data);
                console.log(response.headers);
                if(response.status){
                    alert(response.data);
                    Navigate("/userdetails",)
                }
                
               } catch (error) {
                //   alert(error.response.data)
                    console.log(error)
               }
            }
        }
    }


    return (
        <>
            <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
                <div className="col-sm-10 col-md-6 col-lg-4  border  rounded p-4">
                    <h1 className='text-center'>Registration</h1>
                    <form className='' onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Entre Name" name='name' required onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" required onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' required onChange={handleChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Confirm-Password</label>
                            <input type="password" className="form-control" id="cpassword" placeholder="Confirm-Password" name='cpassword' required onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>Create Account</button>
                        <div className="mt-3 text-center">
                            Already have an account? <Link to="/login">Sign in</Link> {/* Link to the sign-in page */}
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Register
