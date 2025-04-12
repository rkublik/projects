import React from "react"
import Confetti from "react-confetti"
import { useState, useEffect } from "react"
import {languages} from "../data/languages.js"
import Status from "./Status.jsx"
import Chip from "./Chip.jsx"
import Keyboard from "./Keyboard.jsx"
import Word from "./Word.jsx"
import { randomWord } from "../data/words.js"

import "./AssemblyEndgame.css";

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState(() => randomWord().toUpperCase())
    
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
    
    const foundLetters = keys
        .filter(letter => letter.guessed && letter.inWord)
        .map(letter => letter.key)

    // should follow convention isGameWon/isGameLost...
    const gameWon = currentWord.split("").every((letter) => foundLetters.includes(letter));
    const gameLost = numWrong >= languageChips.length - 1


    const isGameOver = gameWon || gameLost;
    const outcome = isGameOver? gameWon? "win" : "lose": "progress"

    if (isGameOver){
        const keyComponents = document.getElementsByClassName("keyboard-key");
        for (const key of keyComponents){key.disabled=true;}
    }
    

    function restartGame(){
        setCurrentWord(randomWord().toUpperCase());
        setKeys(prevKeys => prevKeys.map((keyObj)=> ({...keyObj, guessed:false, inWord:false})))
        const keyComponents = document.getElementsByClassName("keyboard-key");
        for (const key of keyComponents){key.disabled=false;}
    }

    function handleKeyPress (letter){
        setKeys(prevKeys => prevKeys.map(
            keyObj => keyObj.key===letter? {
                ...keyObj,
                guessed:true, 
                inWord: currentWord.includes(keyObj.key) //todo: check to remove chip here... check if already guessed letter?
            }: keyObj
        )
    )
    }

    useEffect(()=>{
        const keyHandler = (event)=>{
            handleKeyPress(event.key.toUpperCase())
        }
            document.addEventListener("keydown", keyHandler)
        return () =>{
            document.removeEventListener("keydown", keyHandler);
        }
        
    }, [currentWord])

    console.log(currentWord)
    return (
        <main>
            {gameWon? <Confetti/> : null} 
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
                <Word word={currentWord} found={foundLetters} gameOver={isGameOver}/>
            </section>
            <Keyboard keys={keys} handleKeyPress={handleKeyPress}/>
            {isGameOver && <button className="new-game" onClick={restartGame} autoFocus >New Game</button>} 
        </main>
    )
}

/* todo:
 - set focus on new game button when game over
 - keyboard listener seems stuck on initial word... because reference passed had original currentWord... 
*/


