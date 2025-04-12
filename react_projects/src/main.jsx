import React from "react";
import {Outlet} from "react-router";

export default function Main(){
    return (
        <div>
            <h1>Demo Apps</h1>
            <h2>Navigation will go here</h2>
            <Outlet />
        </div>
    )
}