
import React from 'react'
import './index.css'

function Footer() {
return (
    <div>
    <div className="container footer">
                    <hr style={{color: '#bababa',height:'30px'}}/>
                    <div className="footer1">
                        <div className="logo"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="28" height="28" data-testid="brand-icon-icon" aria-hidden="true" focusable="false" class="logo-icon"><path d="M35 0H5C2.24 0 0 2.24 0 5v30c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Z" fill="#bababa"></path><path d="M14.58 17.53c.41-.04.71-.4.68-.81a.756.756 0 0 0-.81-.68c-.39.03-.68.35-.68.74.02.43.38.76.81.75Zm10.44-1.33c.12-.09.25-.14.4-.16.43-.02.79.32.81.75 0 .41-.33.75-.75.75s-.75-.33-.75-.75c0-.23.11-.45.29-.59Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.51 14.52v-.03c-.15-.3-.1-.65.12-.9a4.983 4.983 0 0 0 .89-4.78c-.06-.19-.34-.24-.61-.29-.26-.05-.52-.09-.62-.26-.09-.15-.06-.38 0-.63.02-.07.03-.13.04-.2.05-.26.07-.51-.06-.64s-.28-.26-.42-.37l-.09-.07c-1-.74-2.23-1.1-3.47-1.03-1.08.05-2.23.41-3.06 1.14-.4.29-.92.37-1.39.22l-.07-.02c-.84-.3-1.7-.52-2.58-.66a14.28 14.28 0 0 0-6.95.66h-.05c-.45.18-.96.1-1.35-.19-1.55-1.37-4.68-1.71-6.72.01-2.23 1.88-2.36 5.17-.71 7.1.22.25.26.6.12.9-.98 2-1.5 4.2-1.51 6.43 0 7.97 6.72 13.77 15 13.77 8.28 0 15-5.8 15-13.77 0-2.22-.52-4.41-1.49-6.41 0 0 0 .02-.01.02h-.01ZM19.9 20.19c1.19 0 2.15.26 2.15.72 0 .46-.96 1.5-2.15 1.5s-2.15-1.04-2.15-1.5c0-.46.96-.72 2.15-.72ZM7.86 11.8a.578.578 0 0 1-.18-.2c-.02-.03-.04-.07-.06-.1-.36-.66-.45-1.44-.23-2.16.42-1.41 1.92-2.24 3.35-2.05.37.05.74.17 1.07.35.14.08.26.17.37.28.04.04.08.09.1.15.02.09 0 .18-.07.25-.06.06-.14.11-.22.15-1.37.8-2.49 1.95-3.52 3.14-.17.19-.35.37-.61.19Zm3.66 11.33c-1.24-.14-2.32-1.45-2.73-2.77-.18-.58-.61-3.26 1.31-5.2.64-.64 1.54-1.21 2.79-1.59.41-.1.82-.15 1.24-.15.62 0 1.36.1 1.95.53 1.24.91 1.26 2.44.52 3.23s-2.4 2.59-2.83 4.06c-.42 1.47-1.01 2.04-2.26 1.9 0 0 .01-.01.01 0v-.01Zm8.4 4.43h-.04c-2.39-.01-4.32-1.7-4.32-3.4 0-.59.26-.89.89-.73.37.09 1.89.48 3.27.48h.35c1.35 0 2.82-.37 3.24-.48h.03c.64-.16.89.14.89.72 0 1.7-1.93 3.39-4.32 3.4h.01v.01Zm11.09-7.22c-.41 1.32-1.49 2.63-2.73 2.77-1.24.14-1.83-.42-2.26-1.9-.43-1.47-2.09-3.28-2.83-4.07-.74-.78-.72-2.32.52-3.23.58-.43 1.33-.53 1.95-.53.42 0 .83.05 1.24.15 1.25.38 2.15.94 2.79 1.58 1.92 1.94 1.49 4.62 1.31 5.2 0 0 .01.03 0 .03h.01Zm1.37-8.84-.06.1a.86.86 0 0 1-.18.2c-.26.18-.44 0-.61-.19-1.03-1.19-2.15-2.34-3.52-3.14a1.07 1.07 0 0 1-.22-.15.33.33 0 0 1-.08-.25c.02-.06.05-.11.1-.15.11-.11.23-.21.37-.28.33-.18.7-.3 1.07-.35 1.43-.19 2.93.64 3.35 2.05.21.72.13 1.5-.23 2.16h.01Z" fill="#fff"></path></svg>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 27" height="22" data-testid="brand-icon-text" aria-hidden="true" focusable="false"><path d="M0 6.56h2.3V4.39C2.3 1.76 3.74 0 6.6 0l1.44.29v2.63l-1.57-.29c-.86 0-1.29.59-1.29 1.47v2.46h2.86v2.63H5.17v11.13H2.3V9.19H0V6.56Zm15.48-.29c3.73 0 7.03 2.92 7.03 7.17s-3.3 7.17-7.03 7.17c-3.73 0-7.03-2.92-7.03-7.17s3.3-7.17 7.03-7.17Zm0 11.7c2.73 0 4.16-2.04 4.16-4.54s-1.44-4.54-4.16-4.54-4.16 2.04-4.16 4.54c-.01 2.5 1.43 4.54 4.16 4.54ZM30.8 6.27c3.73 0 7.03 2.92 7.03 7.17s-3.3 7.17-7.03 7.17c-3.73 0-7.03-2.92-7.03-7.17s3.3-7.17 7.03-7.17Zm0 11.7c2.73 0 4.16-2.04 4.16-4.54s-1.44-4.54-4.16-4.54-4.16 2.04-4.16 4.54c-.01 2.5 1.43 4.54 4.16 4.54Zm22.06 2.34h-2.58L50 19.14l-.15-.15-.15.15c-.86.88-2.3 1.47-3.73 1.47-3.73 0-6.89-2.92-6.89-7.17s3.16-7.17 6.89-7.17c1.4 0 2.87.59 3.73 1.47l.15.15.15-.15V0h2.87v20.3l-.01.01ZM46.12 8.9c-2.73 0-4.19 2.04-4.19 4.54s1.46 4.54 4.19 4.54c2.44 0 4.16-2.04 4.16-4.54S48.56 8.9 46.12 8.9Zm9.62-2.35h2.58l.26 1.17.17.15.15-.15c.86-.88 2.3-1.47 3.73-1.47 3.73 0 6.89 2.92 6.89 7.17s-3.16 7.17-6.89 7.17c-1.4 0-2.87-.59-3.73-1.47l-.15-.15-.17.15v7.38h-2.84V6.55Zm6.74 11.41c2.73 0 4.16-2.04 4.16-4.54s-1.44-4.54-4.16-4.54c-2.44 0-4.16 2.04-4.16 4.54s1.72 4.54 4.16 4.54Zm14.26-6.2h2.35v-.6c0-1.65-1.11-2.42-2.64-2.42-1.24 0-2.08.6-2.53 1.84l-2.57-.55c.57-2.35 2.53-3.82 5.13-3.82 3.61 0 5.42 1.82 5.42 5.48v8.62h-2.37l-.27-1.82c-.95 1.35-2.35 2.04-4.22 2.04-2.4 0-4.18-1.45-4.18-4.21s2.35-4.55 5.89-4.55c0 0-.01-.01 0-.01h-.01Zm-1.22 6.22c.95 0 1.78-.3 2.49-.9.72-.64 1.08-1.49 1.08-2.62v-.3h-2.46c-1.73 0-2.8.83-2.8 2.14-.01.99.59 1.68 1.7 1.68h-.01Zm9.02-11.44h2.58l.28 1.17.15.15.15-.15c.58-.88 2-1.47 3.16-1.47 3.44 0 5.45 2.35 5.45 5.56v8.49h-2.87V11.8c-.09-1.87-.97-2.92-2.86-2.92-1.7 0-3.1 1.4-3.16 3.1v8.32h-2.87V6.56h-.01v-.02Zm27.39 13.76h-2.58l-.28-1.17-.15-.15-.15.15c-.86.88-2.3 1.47-3.73 1.47-3.73 0-6.89-2.92-6.89-7.17s3.16-7.17 6.89-7.17c1.4 0 2.87.59 3.73 1.47l.15.15.15-.15V0h2.86v20.31-.02.01Zm-6.74-11.41c-2.73 0-4.19 2.04-4.19 4.54s1.46 4.54 4.19 4.54c2.43 0 4.16-2.04 4.16-4.54s-1.72-4.54-4.16-4.54Zm14.9 2.87h2.35v-.6c0-1.65-1.11-2.42-2.64-2.42-1.24 0-2.08.6-2.53 1.84l-2.57-.55c.57-2.35 2.53-3.82 5.13-3.82 3.61 0 5.42 1.82 5.42 5.48v8.62h-2.37l-.27-1.82c-.95 1.35-2.35 2.04-4.22 2.04-2.4 0-4.18-1.45-4.18-4.21s2.35-4.55 5.89-4.55c0 0-.01-.01 0-.01h-.01Zm-1.22 6.22c.95 0 1.78-.3 2.48-.9.72-.64 1.08-1.49 1.08-2.62v-.3h-2.46c-1.74 0-2.8.83-2.8 2.14 0 .99.59 1.68 1.7 1.68Z" fill="#bababa"></path></svg>
                    </div>
                    <div><i class="fa-brands fa-facebook" style={{color: '#bebebe', fontSize: '28px',cursor: 'pointer'}}></i>
                        <i class="fa-brands fa-instagram"  style={{color: '#bebebe', fontSize: '28px',cursor: 'pointer',marginLeft:'10px'}}></i>
                    </div>
                </div>
                <hr style={{color: '#bababa'}}/>
                </div>
                <div className="container footer2">
                    <div><span>© 2023 foodpanda</span></div>
                    <div><span>press</span><span>Help center</span><br/><span>Refunds with Pandapay</span><br/><span>Pandapay User Account Terms and &nbsp;&nbsp;Conditions </span><br/>
                    <span>Terms and conditions</span><span>Privacy policy</span><span>Security</span><span>Download foodpanda Apps</span>
                    </div>
                    <div><span>Careers</span><span>Suggest a restaurant</span><span>Corporate Customer</span><span>Cashback Terms and Conditions </span>
                    <br/><span>All cuisines foodpanda Magazine</span><span>Partner with us </span><span>pandago - Request a rider foodpanda Vouchers&Promo</span>
                </div>
            <div><span>All cities</span><span>Update on COVID-19 in Pakistan  pandamart Grocery Delivery  pandapro - monthly subscription programme foodpanda  home chef</span><br/>
                <span>Become an affiliate Ramzan deals</span>
                </div>
                <br/>
            </div>
                <div className="container footer3">
                    <hr style={{color: '#bababa'}}/>
                    <span>Laos   |</span>   <span>Cambodia   |</span> <span>Myanmar   | </span>   <span>Thailand   | </span> <span>Hong Kong   | </span> <span>Taiwan   |</span>  <span>Malaysia   |</span>   <span>Philippines   |</span>   <span>Singapore   | </span>    <span> Bangladesh</span>
            </div>
        </div>
)
}

export default Footer
