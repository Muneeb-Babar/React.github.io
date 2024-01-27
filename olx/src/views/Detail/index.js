
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import SubHeader from '../../components/SubHeaader';
import SubFooter from '../../components/SubFooter';
import './index.css'
import DarkVariantExample from '../../components/Slider';
import { getSingleAds } from '../../config/firebase';


function Detail(){
    const [product,setProduct]=useState([])

const { adId } = useParams();

useEffect(() => {
    getSingleAd();
}, []);

const getSingleAd=async()=>{
    const res=await getSingleAds(adId)
    setProduct(res)
}
const{brand,location,description,price}=product

// Noob function getSingleAd(){
//     fetch(`https://dummyjson.com/products/${adId}`)
// .then(res => res.json())
// .then(res=>setProduct(res));
// }

    return <div>
        <div className='slider container'>
            <div className='first'>
            <DarkVariantExample/>
            <div className='first1'>
                <h1>Price{price}$</h1>
                <h3>{brand}</h3>
                <i class="fa-solid fa-location-dot"></i> <label>{location}</label>
            </div>
            <div className='first2'>
                <h2>Details</h2>
                <h6>Brand : {brand}</h6>
                <h6>Price : {price}$</h6>
            </div>
            <div className='first2'>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            </div>
            <div className='second'>
                <div className='second1'>
                    <div style={{display:'flex', gap:'10px', textAlign:'left',cursor:'pointer'}}><div><span><img src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png' width={80}/></span></div>
                <div><span><h6>Muneeb Babar</h6></span>
                <span>Member since Jan 2024</span>
                <p>See Profile</p></div></div>
            <button className='btn2'><i class="fa-solid fa-phone"></i> Show Phone Number</button>
            <br/>
            <button className='btn3'><i class="fa-regular fa-comment"></i> Chat</button>
                </div>
                <div className='second2'>
                    <h2>Location</h2>
                    <i class="fa-solid fa-location-dot"></i> <label>City Housing Society,Karachi</label>
                </div>
            </div>
        </div>
        <SubFooter/>
    </div>
}
export default Detail