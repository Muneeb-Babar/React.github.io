import  './index.css'
import React from 'react'

function Cover() {
return (
    <div>
    <div className="container contant3">
                    <h5>Put us in your pocket</h5>
                </div>
                <div className="container contant7">
                    <div className="center">
                        <h6>Download the food and groceries you love</h6>
                        <div className="qrdiv">
                            <div style={{width: '20%'}}><img src="https://images.deliveryhero.io/image/foodpanda/homepage/pkhomepageqrcode.png" alt="" width={'100%'}/></div>
                            <div className="qrdiv1" ><p>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p> </div>
                        </div>
                        <div className="nested-flex">
                            <div><img src="http://127.0.0.1:5500/Assets/footer2.svg" alt="" width={'50%'}/></div>
                            <div><img src="http://127.0.0.1:5500/Assets/footer3.svg" alt=""width={'50%'}/></div>
                            <div><img src="http://127.0.0.1:5500/Assets/footer4.svg" alt="" width={'50%'}/></div>
                        </div>
                    </div>
                    <div style={{width: '50%'}}><img src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1400&height=1113" alt=""width={'100%'}/></div>
                </div>
                <div className="container contant3"><h5>Take your office out to lunch</h5></div>
    </div>
)
}

export default Cover
