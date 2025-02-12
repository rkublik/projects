export default function Status(props){
    if (props.outcome === "win"){
        return (
            <section className={`game-status ${props.outcome}`}>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
        </section>
        )    
    } else if (props.outcome === "lose") {
        return (
            <section className={`game-status ${props.outcome}`}>
            <h2>Game Over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
        </section>
        )
    } else if (props.chips.length > 0){
        const chipNames = props.chips.join(", ")
        return (
            <section className={`game-status ${props.outcome}`}>
            
            <p>"Farewell {chipNames}"</p>
        </section>
        )
    }


    //TODO: copy win css from online
}