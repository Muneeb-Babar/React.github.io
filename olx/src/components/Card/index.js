import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import './index.css'



function Cards(){
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
            return <div >
            <Card style={{ width: '18rem', height:'21rem',border:'1px solid rgb(197, 197, 197)' }}>
            <img src={item.thumbnail} width={'100%'} height={'120px'}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <div style={{fontWeight:'500',fontSize:'1.2rem'}}>price :{item.price}$</div>
            <Card.Text>
            {item.description}
            </Card.Text>
        </Card.Body>
        </Card>
            </div>
        })}
        </div>
        
        
    </div>
}
export default Cards