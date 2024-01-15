import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderModal from '../function/OrderModal';

const HomePage = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    // Fetch featured items from the server or JSON file
    axios.get('menu.json')
      .then(response => setFeaturedItems(response.data.featuredItems))
      .catch(error => console.error('Error fetching featured items:', error));
  }, []);

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setIsOrderModalOpen(true);
  };

  const handleOrderSubmit = (orderData) => {
    // Handle order submission, e.g., make an API request
    console.log('Order submitted:', orderData);
    setIsOrderModalOpen(false);
  };

  return (
    <div>
      <div  id="top-text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/images/images.png" alt="Food" style={{ width: '50%', height: 'auto' }} />
        <div style={{ width: '50%' }}>
          <p>
            On the main page of the restaurant, customers are in an atmosphere of hospitality and convenience,
            getting access to various information about the establishment.
            A convenient and informative interface provides the following general information.
          </p>
        </div>
      </div>

      <h3 style={{ textAlign: 'left',  }}>Featured Items</h3>
      <div id="botte-text" style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {featuredItems.map(item => (
          <li key={item.id}>
            <div>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
            <p>{item.name}</p>
            <p>Price: {item.price} грн</p>
            <button onClick={() => handleOrderClick(item)}>Order</button>
            
            </div>
          </li>
             ))}
          </ul>
      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onRequestClose={() => setIsOrderModalOpen(false)}
        onSubmit={handleOrderSubmit}
        selectedItem={selectedItem}
      />
     </div>
    </div>
  );
};

export default HomePage;
