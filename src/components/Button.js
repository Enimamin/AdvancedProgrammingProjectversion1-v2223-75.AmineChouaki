import React from "react";


const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`btn btn-${props.color} m-2`}>
            {props.children}
        </button>
    )
}

export default Button;