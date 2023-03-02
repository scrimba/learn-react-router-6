import React from "react"
import { useParams, Link } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    /**
     * Mini challenge: Try to make it so the "Back to all vans"
     * Link takes people BACK one route.
     * 
     * MAJOR HINT: we just talked about how `cd .` and `cd ..`
     * work in a terminal, and mentioned how `.` represents
     * the current route
     * 
     * MAJOR CAVEAT: it's not going to do what you think it'll
     * do, but we'll learn why and see an easy fix 🤭
     */
        
    return (
        <section>
            <Link
                to="?"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
