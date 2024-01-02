import './index.css'
function Custombtn(props){
    return <button className="btn" onClick={()=>alert('Hi Muneeb')} style={{backgroundColor:props.bgcolor}}>
        {props.text}
    </button>
}
export default Custombtn