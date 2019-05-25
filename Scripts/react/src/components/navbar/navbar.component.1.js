import React, { memo} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav ">
                <li className="nav-item">
                    <Link className="nav-link" to="/" >Repositories</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/bookmarks" >Bookmarks</Link>
                </li>
            </ul>
        </nav>
    )
}
export default memo(Navbar);