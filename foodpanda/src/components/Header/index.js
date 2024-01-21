

import React from 'react'
import './index.css'

function Header() {
return (
    <div>
    <div className="main_contant container-fluid">
        <div className="container flex_contant">
            <div className="contant1">
                <h3>It's the food and groceries you love,<br/> delivered</h3>
                <div className="input1">
                    <input className="input2" type="text" placeholder="Enet your full address" style={{width: '80%', padding: '10px', border: '1px solid gray', borderRadius: '8px'}}/>  
                    <div className="btn1">Find food</div>
                </div>
            </div>
            <div className="contant2"><img src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1920" width={'100%'} height={'100%'}/></div>
        </div>
    </div>
    </div>
)
}

export default Header
