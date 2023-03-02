import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
/**
 * Challenge - part 2:
 * Make the host navbar indicate the currently-active route.
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * I'd recommend using an inline style this time.
 * 
 * NOTE: There will be a small bug that we'll fix 
 * after you do the challenge.
 */

    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}