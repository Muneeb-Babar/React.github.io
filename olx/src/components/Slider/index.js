import Carousel from 'react-bootstrap/Carousel';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getSingleAds } from '../../config/firebase';

function DarkVariantExample() {

    const [product,setProduct]=useState([])

    const { adId } = useParams();
    
    useEffect(() => {
        getSingleAd();
    }, []);

    const getSingleAd=async()=>{
        const res=await getSingleAds(adId)
        setProduct(res)
    }
    const{image}=product
    
    // function getSingleAd(){
    //     fetch(`https://dummyjson.com/products/${adId}`)
    // .then(res => res.json())
    // .then(res=>setProduct(res));
    // }
    if(!product){
        return <div>Loading</div>
    }
return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image}
        alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={image}
        alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default DarkVariantExample;