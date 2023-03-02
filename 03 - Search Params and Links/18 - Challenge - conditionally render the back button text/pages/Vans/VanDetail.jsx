import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    /**
     * Challenge: When a filter is applied, change the text of
     * the button to say "Back to luxury vans" (e.g.) instead of
     * "Back to all vans".
     * 
     * As usual, there's more than one way to solve this, so just
     * give it your best shot
     */
    
    const search = location.state?.search || ""
    
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}