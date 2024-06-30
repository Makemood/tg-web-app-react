import React from "react"; 
const Button = (props) => {
    return (
        <buttom {...props} className={'button' + props.className} />
    );
}