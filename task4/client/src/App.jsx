import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function App() { 
    const [value, setValue] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'address': '',
        'city': '',
        'state': '',
        'zip': '',
    })
    function handleChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*\d).{6,}$/;

        if (value.firstname.length < 2) {
            toast.error("First name must be at least 2 characters long")
        }
        else if (value.lastname.length < 2) {
            toast.error("Last name must be at least 2 characters long")
        }

        else if (!emailRegex.test(value.email)) {
            toast.error('Please enter a valid email address')
        }
        else if (!passwordRegex.test(value.password)) {
            toast.error(`Password should contain the following`)

        }
        else {
            try {
                const response = await axios.post('http://localhost:3000/', value);
                toast.success(response.data);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <div className="container">
                <form className=" border border-secondary-subtle m-5 p-5" action="/" method="post" onSubmit={handlesubmit}>
                    <h1 className="text-center mb-5">Form Submission</h1>
                    <div className="row mb-1">
                        <div className="col">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" className="form-control" placeholder="First name" id="firstname" name="firstname" onChange={handleChange} required />
                        </div>
                        <div className="col">
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" id="lastname" name="lastname" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" name="email" onChange={handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group mb-1">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" onChange={handleChange} required />
                    </div>
                    <div className="row mb-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" name="city" id="inputCity" onChange={handleChange} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" name="state" onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option>WB</option>
                                <option>UP</option>
                                <option>MP</option>
                                <option>Bihar</option>
                                <option>Goa</option>
                                <option>Tripura</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default App
