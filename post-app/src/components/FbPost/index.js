import { useState,useEffect } from "react";
import FbImageLibrary from 'react-fb-image-grid'
import'./index.css'

function FbPost(){

    const [list , setList]=useState([])

useEffect(function(){
    dataFromApi()
},[])
dataFromApi()

function dataFromApi(){
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(res=>setList(res.products))
    .catch(e=>console.log(e))
}

    return (
    <div>
        {list.map(function(item){
            return <div className="hero">
                <h1>{item.title}</h1>
                <h4>{item.category}</h4>
                <p className="desc">{item.description}</p>
                <div className="gallery">{item.images && <FbImageLibrary images={item.images} />}</div>
                <div className="hero-main"><i class="fa-regular fa-thumbs-up"></i> <i class="fa-regular fa-comment"></i> <i class="fa-solid fa-share"></i></div>
                </div>
        })}
    </div>);
}
export default FbPost