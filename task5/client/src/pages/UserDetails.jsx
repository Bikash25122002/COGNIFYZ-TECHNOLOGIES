import React from 'react';
import "./UserDetails.css"; // Assuming you have a UserDetails.css file for custom styling

const UserDetails = () => { 
  
  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-dark ">
      <div className="row w-100 w-md-75 w-lg-50 p-4 p-md-5">
        <h1 className="text-center mb-4">User Details</h1>
        <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0 border border-1 me-2 right">
          <div className="d-flex flex-column align-items-center ">
            <img src="https://www.shutterstock.com/image-vector/abstract-boy-avtar-character-fiction-260nw-2168819879.jpg" alt="User" className="img-fluid rounded-circle mb-3" />
            <h3>Supriyo Maity</h3>
            <div className="d-flex flex-column">
              <button type="button" className="btn btn-primary mx-2 px-4 mb-2">Update</button>
              <button type="button" className="btn btn-danger px-4">Delete</button>
            </div>
          </div>
        </div>
        <div className="col-md-5 border border-2 right">
          <p className="mb-3 pb-3 border-bottom border-3"><strong>Name:</strong> Supriyo</p>
          <p className="mb-3 pb-3 border-bottom border-3"><strong>Email:</strong> user@example.com</p>
          <p className="mb-3 pb-3 border-bottom border-3"><strong>Phone:</strong> +123 456 7890</p>
          <p className="mb-3 pb-3 border-bottom border-3"><strong>Address:</strong> 123 Street, City</p>
          <p className="mb-3 pb-3 border-bottom border-3"><strong>City:</strong> City</p>
          <p className="mb-3 pb-3 border-bottom border-3"><strong>State:</strong> State</p>
          <p className="mb-0 pb-3 border-bottom border-3"><strong>ZIP:</strong> 12345</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
