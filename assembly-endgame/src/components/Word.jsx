import Letter from "./Letter.jsx"

export default function Word({word, found}){
    const letters = word.split("")
    return (
        <div className="word-display">
            {
                letters.map(letter => (
                    <Letter letter={letter} found={found.indexOf(letter)>=0} />
                ))
            }
        </div>
    )
}