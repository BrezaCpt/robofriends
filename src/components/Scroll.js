import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '360px'}}>
            {props.children}
        </div>
    ); 
};

export default Scroll;