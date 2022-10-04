import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NavBar:
 * A simple navbar for navigating to the products page and the new product for page
 *
 * @return {*} 
 */
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Inventory</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Products<span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/new">Create New</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;