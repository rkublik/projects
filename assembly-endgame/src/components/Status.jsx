function getFarewellText(language){
    const options = [
        `Farewell, ${language}`,
        `Asios, ${language}`,
        `R.I.P ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `${language} it's been real`,
        `${language}, your watch has ended`,
        `${language} as left the building` 
    ];
    const randomIndex=Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export default function Status(props){
    //refactor to not reporoduce the section each time...
    if (props.outcome === "win"){
        return (
            <section className={`game-status ${props.outcome}`} aria-live='polite' role="status"> 
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
        const chipName = props.chips[props.chips.length-1]
        const msg = getFarewellText(chipName);
        return (
            <section className={`game-status ${props.outcome}`}>
            
            <p>{msg}</p>
        </section>
        )
    } else{
        return <section className="game-status"></section> //TODO this could be better....
    }


    //TODO: copy win css from online
}