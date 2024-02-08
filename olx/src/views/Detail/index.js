
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams,useNavigate,} from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useDispatch}from 'react-redux'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { updateCart } from '../../Store/cartSlice';
import SubFooter from '../../components/SubFooter';
import './index.css'
import DarkVariantExample from '../../components/Slider';
import { getSingleAds } from '../../config/firebase';


function Detail(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
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

const handleCart=()=>{
    console.log(product)
    dispatch(updateCart(product))
}


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
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><button style={{border:'none',padding:'6px 14px',borderRadius:'20px'}} onClick={handleCart}>Add to cart</button></div>
                    <div style={{cursor:'pointer'}} onClick={()=>navigate('/cart')}><img width={30} src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'/></div>
                </div>
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
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28955.564250745414!2d67.1775438!3d24.88278015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1707386601540!5m2!1sen!2s" width={'100%'} height="350"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            </div>
        </div>
        <SubFooter/>
    </div>
}
export default Detail