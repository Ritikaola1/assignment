import React, { useState } from 'react'
// import { useHistory } from 'react'

const SignUp = () => {
  const [credentials, setCredentials] = useState({firstname : "", lastname : "", city : "" , email:"", password:""})
  // let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {firstname, lastname, email, city, password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/SignUp",{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body :JSON.stringify({firstname, lastname, email, city, password})
    });
    const json = await response.json()
    console.log(json);
    if(json.success){
      localStorage.setItem('token', json.authtoken);
      // history.pushState("/");
    }
    else{
      alert("Invalid credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({...CredentialsContainer, [e.target.name]: e.target.value})
  }
  return (
    <div className="container" my-3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="firstName" className="form-control" id="firstName" name="firstname" onChange={onChange} aria-describedby="firstName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="lastname" className="form-label">Last Name</label>
    <input type="lastname" className="form-control" id="lastname"  name="lastname" onChange={onChange} aria-describedby="lastname"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
    <input type="city" className="form-control" id="city" name="city"  onChange={onChange} aria-describedby="city"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default SignUp
