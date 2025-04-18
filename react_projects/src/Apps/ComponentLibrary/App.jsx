import React from 'react';
import Badge from "./components/Badge.jsx"
import Banner from "./components/Banner.jsx"
import "./app.css"

export default function App(){
    return (
        <div>
            <h2>Component Library</h2>
            <h3>Badges</h3>
            <div class="badge-display">                
                <Badge shape="square" color="gray">Gray </Badge>
                <Badge shape="square" color="red">Red </Badge>
                <Badge shape="square" color="yellow">Yellow </Badge>
                <Badge shape="square" color="green">Green </Badge>
                <Badge shape="square" color="blue">Blue </Badge>
                <Badge shape="square" color="indigo">Indigo </Badge>
                <Badge shape="square" color="purple">Purple </Badge>
                <Badge shape="square" color="pink">Pink </Badge>
            </div>            
            <div class="badge-display">                
                <Badge shape="pill" color="gray">Gray </Badge>
                <Badge shape="pill" color="red">Red </Badge>
                <Badge shape="pill" color="yellow">Yellow </Badge>
                <Badge shape="pill" color="green">Green </Badge>
                <Badge shape="pill" color="blue">Blue </Badge>
                <Badge shape="pill" color="indigo">Indigo </Badge>
                <Badge shape="pill" color="purple">Purple </Badge>
                <Badge shape="pill" color="pink">Pink </Badge>
            </div>

            <h2>Banners</h2>
            <Banner bannerType="success" title="Banner 1">
                Some text here....
            </Banner>
            <Banner bannerType="error" title="Banner 2"/>
        </div>
    )
}

