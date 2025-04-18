import React from "react"
import infoIcon from "../assets/info.png"

export default function Banner({bannerType, title, children}){
    const imgSrc="../assets/info.png"
    return( 
        <div className={`banner ${bannerType}`}>
            <div className="banner-title-container">
                <img src={infoIcon} alt="icon"/>
                <h3 className="banner-title">{title}</h3>
            </div>

            {children && <div class="banner-message">{children}</div>}
        </div>
    )
}

