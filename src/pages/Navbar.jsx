import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
    <div>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i class="bi bi-cup-hot-fill" ></i><b id='theRecipie'>THE RECIPIEs</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapsenavbarcollapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0" id='homeButton'>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Our All Recipies</a></li>
                  <li><a className="dropdown-item" href="#">Searching For Cheff</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Shops Near You</a></li>

                </ul>


              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reachus">ReachUs</Link>
              </li>
              
              <div>
              <Link className="btn btn-primary btnSignup" to="/signup" role="button">Signup/ Login</Link>

  
  
</div>


            </ul>
            

            <div>

            </div>

          </div>
        </div>
      </nav>


    </div>
    </div>
  )
}

export default Navbar

