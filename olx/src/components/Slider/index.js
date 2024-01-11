import Carousel from 'react-bootstrap/Carousel';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'

function DarkVariantExample() {

    const [product,setProduct]=useState([])

    const { adId } = useParams();
    
    useEffect(() => {
        getSingleAd();
    }, []);
    
    function getSingleAd(){
        fetch(`https://dummyjson.com/products/${adId}`)
    .then(res => res.json())
    .then(res=>setProduct(res));
    }
    if(!product){
        return <div>Loading</div>
    }
return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={product.thumbnail}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={product.thumbnail}
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={product.thumbnail}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default DarkVariantExample;