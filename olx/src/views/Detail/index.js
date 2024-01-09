import {useNavigate}from 'react-router-dom'

function Detail(){
    const navigate=useNavigate()
    return <div>
        <h1>Detail</h1>
        <button onClick={()=>navigate(-1)}>Back</button>
    </div>
}
export default Detail