

import React from 'react'
import './index.css'

function Header() {
return (
    <div>
    <div className="main_contant container-fluid">
            <div className="container contant1">
                <div>
                <h3>It's the food and groceries you love delivered</h3>
                {/* <div  className="container input-box">
                <input className="input2" type="text" placeholder="Enet your full address" />  
                    <button className="btn1">Find food</button></div> */}
                </div>
                <div className="contant2"><img src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1920" width={'100%'} /></div> 
            </div>
            
            
        </div>
    </div>
)
}

export default Header
