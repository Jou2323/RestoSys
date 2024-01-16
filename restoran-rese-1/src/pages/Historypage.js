import React from 'react';
import OrderHistory from '../function/OrderHistory';
import TableHistory from '../function/TableHistory';

const Historypage = () => {
  return (
   

    <div>
       <h3 style={{ textAlign: 'left'}}>History</h3>
      <OrderHistory />
      <TableHistory />
    </div>
  );
};

export default Historypage;
