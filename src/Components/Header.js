import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >EMPLOYEE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Add employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">view employee</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header