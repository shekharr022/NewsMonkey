import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8085/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZmE1N2YzYWI3NWM5NDc2Y2RmODk1In0sImlhdCI6MTY5NzYyMTQwMH0.qSaOzDYcvhYjhNpxlU-HRfWa8qDn9gZlitEiJCR4di4"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect 
            localStorage.setItem('token', json.authToken);
            navigate("/login");
            // props.ShowAlert("Account Created Successfully", "success");
        }
        else {
            alert('Login failed')
            // props.ShowAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='container p-3 w-50' style={{ marginTop: '100px', border: '2px solid grey', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center'>Sign Up</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <p>Already have account<Link to='/login'><button className='btn btn-outline-primary my-3'>Login</button></Link></p>
            </form>
        </div>
    )
}

export default SignUp
