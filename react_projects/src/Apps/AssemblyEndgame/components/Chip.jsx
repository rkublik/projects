export default function Chip(props){
    const {backgroundColor, color} = props

    return  (
        <span 
            className={ props.show? "chip" : "chip lost"}  
            style={{backgroundColor, color}} 
            >
                {props.name}
        </span>
    )    
}