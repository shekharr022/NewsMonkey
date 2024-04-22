import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8085/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZmE1N2YzYWI3NWM5NDc2Y2RmODk1In0sImlhdCI6MTY5NzYyMTQwMH0.qSaOzDYcvhYjhNpxlU-HRfWa8qDn9gZlitEiJCR4di4"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect 
            localStorage.setItem('token', json.authToken);
            // props.ShowAlert("Login Successfully", "success");
            navigate("/home");
        }
        else {
            alert("Login failed")
            // props.ShowAlert("Invalid Credentials, Login failed", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

  return (
      <div className='container p-3 w-50' style={{ marginTop: '100px', border: '2px solid grey', borderRadius: '5px' }}>
          <form onSubmit={handleSubmit}>
              <h1 className='text-center'>Login</h1>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name='email' onChange={onChange} value={credentials.email}/>
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <p>Don't have account<Link to='/signup'><button className='btn btn-outline-primary my-3'>Sign Up</button></Link></p>
          </form>
      </div>
  )
}

export default Login
