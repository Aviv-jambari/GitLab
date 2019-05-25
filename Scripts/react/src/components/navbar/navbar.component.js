import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [collpased, setCollpsed] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >GitLab</Link>
            <button onClick={() => { setCollpsed(!collpased) }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${(!collpased) ? "show" : ""}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link to="/" className="nav-link" >repositories</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/bookmarks" className="nav-link" >Bookmarked</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default memo(Navbar);