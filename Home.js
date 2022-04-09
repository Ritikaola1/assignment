import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={ ({ marginLeft: '10rem' })} display>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Login
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>A login is a set of credentials used to gain access to an area requiring proper authorization. Logins grant access to and control of computers, networks, and bulletin boards, and online accounts and other services or devices.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item" style={ ({ marginLeft: '10rem' })}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          SignUp
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Sign up is an action to register yourself for a new account. Different web portals might use different terms for returning users but they all use “sign up” for the process of first time registration. It simply means to create a new account – be it a portal, application, or newsletter.</strong>
        </div>
      </div>
    </div>
  </div>
  )
}
