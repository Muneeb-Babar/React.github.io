
import React from 'react'
import {useNavigate}from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function AboutUs() {
    const navigate=useNavigate()
    const theme=useSelector(state => state.theme)
return (
    <div style={{height:'500px', background: theme}}>
    <h2>About us</h2>
    <button onClick={()=>navigate(-1)}>Back</button>
    </div>
)
}
