export default function Letter({letter, found}){
    return (
        <div className="letter">
            {found? letter: " "}
        </div>
    )
}