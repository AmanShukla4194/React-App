import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode==='dark'?'black':'#88d7fe', height: '70px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{color: props.mode==='dark'?'white':'black'}} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={{color: props.mode==='dark'?'white':'black'}} aria-current="page" href="/">{props.Home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: props.mode==='dark'?'white':'black'}} href="/">{props.About}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" style={{color: props.mode==='dark'?'white':'black'}} type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
// Navbar.propTypes = {title:PropTypes.string.isRequired, About:PropTypes.string, Home:PropTypes.string}
Navbar.propTypes = { title: PropTypes.string, About: PropTypes.string, Home: PropTypes.string }


Navbar.defaultProps = {
  title: 'Set title here',
  About: 'About text here',
  Home: 'home page here'
};