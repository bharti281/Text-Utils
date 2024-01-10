import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `} style={{backgroundColor : props.theme}} >
    <a className="navbar-brand" href='/'>
     {props.title}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href='/'>
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-items  active">
          <a className="nav-link" href='/'>
           {props.aboutxt}
          </a>
        </li>
        </ul>
        
        <div>
<button type="button" className="btn btn-primary mx-3" onClick={props.BlueMode}>
          Blue theme
  </button>
  <button type="button" className="btn btn-secondary mx-3" >
   Grey them
  </button>
  <button type="button" className="btn btn-success mx-3">
    Green theme
  </button>
  <button type="button" className="btn btn-danger mx-3">
    Red theme
  </button>
  <button type="button" className="btn btn-warning mx-3">
    Yellow theme
  </button>
        </div>
      {/* <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form> */}

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input
    className="form-check-input"
    type="checkbox"
    role="switch"
    id="flexSwitchCheckDefault"
    onClick={props.toggleMode}
  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
  {props.mode==='light'?'Enable DarkMode':' Enable LightMode'}
  </label>
</div>

    </div>

  </nav>
  )
}




Navbar.propTypes = { title: PropTypes.string.isRequired,
    aboutxt: PropTypes.string
   }
    Navbar.defaultProps = {
    title: 'set title here',
    aboutxt: 'about text here'
   }
   