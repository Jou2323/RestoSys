// OrderList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Завантаження списку замовлень з JSON-файлу
    axios.get('orderHistory.json')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handleEditClick = (orderId) => {
    // Логіка для редагування замовлення
    console.log(`Editing order ${orderId}`);
  };

  return (
    <div>
      <h2>List of Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>{order.foodName}</p>
            <p>Date: {order.orderDate}</p>
            <p>Price: {order.price}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleEditClick(order.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
