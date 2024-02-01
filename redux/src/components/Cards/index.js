
import React from 'react'
import {useNavigate}from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Cards() {
    const color = useSelector((state) => state.theme)

    const navigate=useNavigate()
return (
    <div style={{height:'500px',border:'2px solid black', background: color}}>
    <button onClick={()=>navigate('/aboutUs')}>About us</button>
    </div>
)
}
