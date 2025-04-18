import React from "react"

import infoIcon from "../assets/info.png"
import checkIcon from "../assets/check-circle.png"
import xIcon from "../assets/x-circle.png"
import exclamationIcon from "../assets/exclamation.png"

export default function Banner({bannerType, title, children}){
    const iconTypes = {success:checkIcon, warning:exclamationIcon, error:xIcon, neutral:infoIcon };
        
    return( 
        <div className={`banner ${bannerType}`}>
            <div className="banner-title-container">
                <img src={iconTypes[bannerType]} alt="icon"/>
                <h3 className="banner-title">{title}</h3>
            </div>

            {children && <div class="banner-message">{children}</div>}
        </div>
    )
}

