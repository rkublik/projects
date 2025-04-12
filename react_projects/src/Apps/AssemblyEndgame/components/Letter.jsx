export default function Letter({letter, found, missing}){
    const letterClass = ["letter", missing ? "not-found": ""].join(" ")
    return (
        <div className={letterClass}>
            {found || missing? letter: " "}
        </div>
    )
}