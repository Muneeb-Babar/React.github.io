import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import './index.css'
import {useNavigate} from 'react-router-dom'



function Cards(){
    const navigate=useNavigate()
    const[ads,setAds]=useState([])

    useEffect(()=>{
        getData()
    },[]);
    
    function getData(){
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>setAds(res.products));
    }
if(!ads){
    return <div>Loading...</div>
}
    return <div>
        <div className='card1 container'>
        {ads.map(function(item) {
            const{title,description,thumbnail,id,price}=item
            return <div >
            <Card style={{ width: '18rem', height:'21rem',border:'1px solid rgb(197, 197, 197)'}} onClick={()=>navigate(`detail${id}`)}>
            <img src={thumbnail} width={'100%'} height={'120px'}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div style={{fontWeight:'500',fontSize:'1.2rem'}}>price :{price}$</div>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
        </Card>
            </div>
        })}
        </div>
    </div>
}
export default Cards