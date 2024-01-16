// OrderHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orderHistory, setOrderItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/orders')
      .then(response => {
        console.log('API Response:', response.data);
        setOrderItems(response.data);
      })
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  return (
    <div id="order_history">
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Назва страви</th>
            <th>Дата замовлення</th>
            <th>Ціна</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map(order => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.dateOrdering}</td>
              <td>{order.price} грн</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
