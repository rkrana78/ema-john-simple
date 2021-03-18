import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgrey',
        marginBottom: '15px',
        paddingBottom: '20px',
        marginLeft: '50px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button
             className="main-button"
             onClick={() => props.removeProduct(key)}
             >Remove</button>
        </div>
    );
};

export default ReviewItem;