import React from "react"
import { useState, useEffect } from "react"
import {languages} from "../data/languages.js"
import Status from "./Status.jsx"
import Chip from "./Chip.jsx"
import Keyboard from "./Keyboard.jsx"
import Word from "./Word.jsx"


export default function AssemblyEndgame() {
    const word = "foxglove".toUpperCase();
    
    const [keys, setKeys] = useState(() =>(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
            {key:letter, guessed:false, inWord:false}
        ))

    ));


    const numWrong = keys.filter(letter => letter.guessed && !letter.inWord).length;

    const languageChips = languages.map((langObj, idx) =>{
        const chipProps = {...langObj, id:idx, show:idx>=numWrong}
        return <Chip key={idx} {...chipProps} />
            
    })

    const removedChips = languageChips.filter((langObj, idx) => (idx < numWrong)).map(chip => chip.props.name);
    console.log(removedChips)
    
    const foundLetters = keys
        .filter(letter => letter.guessed && letter.inWord)
        .map(letter => letter.key)

    const gameWon = word.split("").every((letter) => foundLetters.includes(letter));
    const gameLost = numWrong >= languageChips.length - 1


    const isGameOver = gameWon || gameLost;
    const outcome = isGameOver? gameWon? "win" : "lose": "progress"

    if (isGameOver){console.log("game over")}
    

    function restartGame(){
        setKeys(prevKeys => prevKeys.map((key)=> ({...key, guessed:false, inWord:false})))
    }

    function handleKeyPress (letter){
        if(!isGameOver) {
        setKeys(prevKeys => prevKeys.map(
            keyObj=> keyObj.key===letter? {
                ...keyObj,
                guessed:true, 
                inWord: word.includes(keyObj.key)
            }: keyObj
        )
    )
}
    }

    useEffect(()=>{
        const keyHandler = (event)=>{
            handleKeyPress(event.key.toUpperCase())
        }
            document.addEventListener("keydown", keyHandler)
        return () =>{
            document.removeEventListener("keydown", keyHandler);
        }
        
    }, [])


    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <Status outcome={outcome} chips={removedChips}/>
            <section className="language-chips">
                {languageChips}
            </section>
            <section className="word-display">
                <Word word={word} found={foundLetters}/>
            </section>
            <Keyboard keys={keys} handleKeyPress={handleKeyPress}/>
            {isGameOver && <button className="new-game" onClick={restartGame} autoFocus >New Game</button>} 
        </main>
    )
}

/* todo:
 - set focus on new game button when game over
 - 
*/


