import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">@Niket</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Education">Education</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/Project">Project</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar