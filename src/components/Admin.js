import './Admin.css'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="Auth1-form-container1">
        <form className="Auth1-form1" onSubmit={handleSubmit}>
          <div className="Auth1-form-content1">
            <h3 className="Auth1-form-title1">Admin SignIn</h3>
            <div className="form-group mt-3">
              <label>Admin Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                name="email"
                style={{width:'300px'}} />
            </div>
            <div className="form-group mt-3">
              <label>Admin Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                name="password"
                style={{width:'300px',color:'white'}}/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/admindashboard">
                <div className="nnun11">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Admin;
