import React from "react"
import ReactDOM from "react-dom/client"
import AssemblyEndgame from "./Apps/AssemblyEndgame/components/App.jsx"
import Main from "./main.jsx"
import {BrowserRouter, Routes, Route, Link} from "react-router"



function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="assembly-endgame" element={<AssemblyEndgame/>}/>

                    <Route path="*" element={<h2>Not Found</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

// Challenge: build component library and test app:
// scrimba: https://scrimba.com/advanced-react-c02h/~023
// Figma: https://www.figma.com/design/8z3MzQUTw2STq71aHbjYaF/Component-Library?node-id=0-1&p=f&t=q2u40sCIfLqBb9Cx-0

// Create better landing page <app> with link to hangman, component demo pages
// Add router so I can link to each separately...