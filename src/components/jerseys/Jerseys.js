import React from 'react';
import './Jerseys.css';

export const Jerseys = ({ jersey }) => {
    return (
        <div className="jersey-card">
            <img className="jersey-image" src={jersey.image} alt="Jersey" />
            <div className="best-seller">BEST SELLER</div>
            <h3 className="jersey-title">{jersey.brand}</h3>
            <p className="jersey-price">Ksh. {jersey.price}</p>
        </div>
    )
}
