export default function KeyboardKey({keyObj, handleKeyPress}) {
    const classVals = "keyboard-key" + 
    (keyObj.guessed ? keyObj.inWord ? " valid": " invalid": "")
    return <button 
            className={classVals}
            aria-label={`Letter ${keyObj.key}`}
            onClick={handleKeyPress}
        >
            {keyObj.key} 
            {keyObj.inWord}
        </button>
}