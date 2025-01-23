import React from "react"
import {languages} from "./languages.js"
import Chip from "./Chip.jsx"
/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 * 
 * Hint for layout: use a flex container that can wrap
 * to layout the languages. (max-width=350px)
 */

export default function AssemblyEndgame() {
    
    const languageChips = languages.map((langObj, idx) =>{
        const chipProps = {...langObj, id:idx, key:idx}
        return <Chip {...chipProps} />
            
    })
    
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
            {languageChips}
            </section>
        </main>
    )
}
