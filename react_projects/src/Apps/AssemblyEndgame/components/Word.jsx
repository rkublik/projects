import Letter from "./Letter.jsx"

export default function Word({word, found, gameOver}){
    const letters = word.split("")
    return (
        <>
        <div className="word-display">
            {
                letters.map((letter, idx) => (
                    <Letter 
                        key={idx} 
                        letter={letter} 
                        found={found.indexOf(letter)>=0} 
                        missing={gameOver && found.indexOf(letter)<0}
                    />
                ))
            }
        </div>
        <div className="sr-only" aria-live="polite" role="status">
            <p>Current word: {letters.map(letter=>found.indexOf(letter)>=0? letter + "." : "blank.").join(" ")}</p> 
        </div>
        </>
    )
}