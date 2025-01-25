export default function Status(props){

    //TODO: copy win css from online
    return (
        <section className={`game-status ${props.outcome}`}>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
    </section>
    )
}