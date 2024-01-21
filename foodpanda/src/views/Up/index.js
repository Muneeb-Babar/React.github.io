import React from 'react'
import Navbar from '../../components/Navbar'
import './index.css'

function Card() {
return (
    <div>
    <Navbar/>
    <div class="card container" id="container1">
        <h3>Welcome!</h3>
        <p>Sign up or log in to continue</p>
        <button class="card-btn1"><i class="fa-brands fa-facebook" style={{color: '#ffffff', fontSize: '20px'}}> </i>&nbsp;&nbsp;Continue to Facebook</button>
        <button class="card-btn2"><i class="fa-brands fa-apple"  style={{color: '#ffffff', fontSize: '20px'}}> </i>&nbsp;&nbsp;Continue to Apple</button>
        <br/>
        <p style={{textAlign:'center'}}>or</p>
        <button class="card-btn3" onclick="start(event)">Log in</button>
        <button class="card-btn4" onclick="start(event)">Sign up</button>
        <p style={{fontSize: '13px', margin: '10px'}}>By signing up, you agree to our <span style={{color: '#e21b70', cursor: 'pointer'}}>Terms and Conditions</span> and <br/> <span style={{color: '#e21b70', cursor: 'pointer'}}> Privacy Policy.</span> </p>
    </div>
    </div>
)
}

export default Card
