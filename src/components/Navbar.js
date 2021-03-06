import React from 'react';
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              
              


            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
// important things to remember
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string
}

Navbar.defaultProps = {
  title:'Iam Default Title',
  abouttext:'I am the default text'
}
