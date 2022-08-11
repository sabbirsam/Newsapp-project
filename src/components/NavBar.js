import React from 'react';
import {  Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar( props ) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ${props.name}`}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/Texteditor">{props.home} <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blog">{props.blog}</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/About" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            {props.About}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/">Action</Link>
            <Link className="dropdown-item" to="/">Another action</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/">Something else here</Link>
          </div>
        </li>
        <li className="nav-item">
         
        </li>
      </ul>

      <label className="switch">
        <input type="checkbox" onClick={props.toogleMode}/>
        <div className="slider round"></div>
      </label>
    </div>
  </nav>
  )
}

Navbar.propTypes  = {
    title : PropTypes.string,
    home: PropTypes.string
}

Navbar.defaultProps ={
    title : "Set title here",
    home: "set page name"
}