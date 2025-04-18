import React from "react"
import "./Badge.css"

export default function Badge({shape, color, children}){
    const badgeClasses = `badge ${shape} ${color}`

    return (
        <div className={badgeClasses}>{children}</div>
    )

}