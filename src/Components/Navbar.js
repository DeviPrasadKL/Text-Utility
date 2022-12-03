import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// In React u can't use class keyword insted u can use className keyword
// Because class is a keyword in JavaScript
//Similarly "for" will be replaced by "htmlFor"
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Upper</Link></li>
                                <li><Link className="dropdown-item" to="#">Lower</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li> */}
                    </ul>

                    {/* Radio button  */}
                    <div className={`form-check form-switch mx-3 text-${props.mode==='dark' ? 'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>

                    {/* Search button  */}
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className= {`btn btn-outline-primary text-${props.mode==='dark' ? 'light':'dark'}`} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}


Navbar.proptype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "This is Default Props",
    about: "This is Default About Us"
}
