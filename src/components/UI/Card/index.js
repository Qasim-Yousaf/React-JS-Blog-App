import React from 'react';
import './style.css';


const Card = (props) => {
    return (
        <div className="card" style={{ width: props.width ? props.width : '100%' }} {...props} >

            {/* props.children is used to render all the things come inside the props from
            the heigher level component , which actaull call it  */}
            {props.children}
        </div>
    );
}

export default Card;