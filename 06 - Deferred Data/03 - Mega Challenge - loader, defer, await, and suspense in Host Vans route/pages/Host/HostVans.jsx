import React from "react"
import { Link } from "react-router-dom"

/**
 * Mega Challenge:
 * Implement loaders, defer, Await, and Suspense to the
 * host vans page!
 * 
 * - I created an API function called `getHostVans` you can
 *   use in your loader instead of the fetch request below.
 * - Tip: Open the playlist for this course in a separate tab
 *   and reference the previous videos for reminders on how to
 *   do each step along the way.
 * - You can do this!
 */

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}