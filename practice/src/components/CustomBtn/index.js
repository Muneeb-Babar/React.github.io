
import React, { useState,useEffect } from 'react'

function CustomBtn(props) {
    const[backColor,setBackColor]=useState()
    const{bgColor}=props

    useEffect(()=>{
        switch(bgColor){
            case 0:setBackColor('red');
            break;
            case 1: setBackColor('green')
            break;
            case 2: setBackColor('skyblue')
            break;
        }
        console.log('bgcolor',bgColor)
    },[bgColor]);

    useEffect(()=>{
        const onClick=()=>{
            console.log('click')
        }
        document.addEventListener('click',onClick)

        return () => {
            console.log('component khatam')
            document.removeEventListener('click', onClick)
        }
    },[])


    return (
    <div>
    <button onClick={props.onClick}
    style={{backgroundColor:backColor}}>
        
        {props.text}</button>
    </div>
)
}

export default CustomBtn
