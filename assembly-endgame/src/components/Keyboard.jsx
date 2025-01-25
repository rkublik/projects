import {keyboard} from '../data/keyboard.js'
import KeyboardKey from './KeyboardKey.jsx'

export default function Keyboard({keys, handleKeyPress}){
    
    const layout = keyboard.split("\n").map(line => (
    <div key={line} className="keyboard-row">
        {line.split(" ").map(letter => {
            const keyObj = keys.find(element => element.key === letter.trim())

            return <KeyboardKey key={keyObj.key} keyObj={keyObj} handleKeyPress={()=>handleKeyPress(keyObj.key)} />
        })}
    </div>
)
)

    return (
        <section className="keyboard">
            {layout}
        </section>
    )
}