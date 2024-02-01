
import React from 'react'
import './index.css'
import  {updateTheme}  from '../../Store/Slicetheme'
import { useDispatch } from 'react-redux'



export default function Header() {
    const dispatch=useDispatch()
return (
    <div>
    <div className='main'>
    <div className='red box' onClick={()=>dispatch(updateTheme('red'))}></div>
    <div className='green box' onClick={()=>dispatch(updateTheme('green'))}></div>
    <div className='blue box' onClick={()=>dispatch(updateTheme('skyblue'))}></div>
    </div>
    <br/>
    </div>
)
}
