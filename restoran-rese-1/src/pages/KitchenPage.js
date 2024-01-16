// KitchenPage.js
import React from 'react';
import OrderList from '../function/OrderList';
import RecipeList from '../function/RecipeList';

const KitchenPage = () => {
  return (
    <div>
      <h1>Kitchen Page</h1>
      <div>
        <OrderList />
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
};

export default KitchenPage;
