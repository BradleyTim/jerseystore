import React from 'react';
import './Jersey.css';
import { Link } from 'react-router-dom';

export const Jersey = ({ jersey }) => {
    return (
        <Link className="link" to="/jerseys/{jersey.id}">
            <div className="jersey-card">
                <img className="jersey-image" src={jersey.image} alt="Jersey" />
                <div className="best-seller">BEST SELLER</div>
                <h3 className="jersey-title">{jersey.brand} {jersey.kit} kit</h3>
                <p className="jersey-price">Ksh. {jersey.price}</p>
            </div>
        </Link>
    )
}
