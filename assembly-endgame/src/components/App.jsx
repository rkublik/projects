import React from "react"
import { useState } from "react"
import {languages} from "../data/languages.js"
import Status from "./Status.jsx"
import Chip from "./Chip.jsx"
import Keyboard from "./Keyboard.jsx"

export default function AssemblyEndgame() {
    const word = "React".toUpperCase();
    const languageChips = languages.map((langObj, idx) =>{
        const chipProps = {...langObj, id:idx}
        return <Chip key={idx} {...chipProps} />
            
    })
    
    const [keys, setKeys] = useState(() =>(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
            {key:letter, guessed:false, inWord:false}
        ))

    ));

    function handleKeyPress(letter){
        console.log(`key ${letter} was pressed`)
        setKeys(prevKeys => prevKeys.map(
            keyObj=> keyObj.key===letter? {
                ...keyObj,
                guessed:true, 
                inWord: word.includes(keyObj.key)
            }: keyObj
        )
    )
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <Status outcome="win"/>
            <section className="language-chips">
                {languageChips}
            </section>
            <section className="word-display"></section>
            <Keyboard keys={keys} handleKeyPress={handleKeyPress}/>
            
        </main>
    )
}

