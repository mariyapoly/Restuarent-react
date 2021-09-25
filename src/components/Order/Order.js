import React from 'react';
import './Order.css';

const Order = (props) => {
    const { orders } = props || {}
    // console.log(meal)
    return (
        <div className="order-details">
            <h3>Order summary {orders.length}</h3>
            <ul>
                {
                    orders.map(order => <li>{order.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Order;