import React from "react";

function Score(props) {
    return (
    <div>
        <h2>Your Score: {props.score}</h2>
        <button onClick={props.onClick}>{props.text}</button>
    </div>
    );
}
export default Score