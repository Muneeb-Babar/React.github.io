import './index.css'
import { useState } from 'react';
function Custombtn(){
    // return <button className="btn" onClick={()=>alert('Hi Muneeb')} style={{backgroundColor:props.bgcolor}}>
    //     {props.text}
    // </button>

    const [isHovered, setIsHovered] = useState(false);

const emojis = ['😍', '👍', '❤️', '😊', '🥳'];

const handleMouseEnter = () => {
    setIsHovered(true);
};

const handleMouseLeave = () => {
    setIsHovered(false);
};

    return (
        <button style={{border:'none', backgroundColor:'white'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {isHovered ? emojis.map((emoji, index) => (
            <span key={index} style={{ marginRight: '5px' }}>{emoji}</span>
        )) : <i class="fa-regular fa-thumbs-up"></i>}
        </button>
    );
}
export default Custombtn