import React from 'react';
import './OrderList.css'

const OrderList = (props) => {
    const { strMeal, strMealThumb, strCategory } = props.order || {};
    console.log()
    return (
        <div className="order-items d-flex align-items-center">
            <div className="order-item-thumb">
                <img src={strMealThumb} alt="meal-thumb" />
            </div>
            <div className="order-item-des">
                <p className="meal-name">{strMeal}</p>
                <p>Category: {strCategory}</p>
            </div>
        </div>
    );
};

export default OrderList;