import React from 'react';
import OrderList from '../OrderList/OrderList';
import './Order.css';

const Order = (props) => {
    const { orders } = props || {}
    // console.log(meal)
    return (
        <div className="order-details">
            <h3>Order summary {orders.length}</h3>
            <div>
                {
                    orders.map(order => <OrderList order={order}></OrderList>)
                }
            </div>

        </div>
    );
};

export default Order;