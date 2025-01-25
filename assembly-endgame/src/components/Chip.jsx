export default function Chip(props){
    const {backgroundColor, color} = props
    return  <div className="chip" style={{backgroundColor, color}} >{props.name}</div>
    
}