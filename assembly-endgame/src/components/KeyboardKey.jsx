export default function KeyboardKey({keyObj, handleKeyPress}) {
    const classVals = "keyboard-key" + 
    (keyObj.guessed ? keyObj.inWord ? " valid": " invalid": "")
    return <button 
            className={classVals}
            onClick={handleKeyPress}
        >
            {keyObj.key}
        </button>
}