export default function Chip(props){
    console.log(props)
    const {backgroundColor, color} = props
    return  <div className="chip" style={{backgroundColor, color}} >{props.name}</div>
    
}