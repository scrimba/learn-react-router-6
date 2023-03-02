import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {
    /**
     * Challenge: access the search params in this component
     * 1. Using the hook from react-router-dom, set a variable
     *    called `searchParams`
     * 2. Save the value of the `type` parameter (from the
     *    `searchParams` object) to a variable called `typeFilter`
     * 3. Log the value of the `typeFilter` to the console
     */
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}