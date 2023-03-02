import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}