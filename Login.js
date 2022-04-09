import React from 'react'

export default function Login() {
  return (
    <div className="container" my-3>
        <form>
        <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
      <input type="username" className="form-control" id="username" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success">Submit</button>
  </form></div>
  )
}
