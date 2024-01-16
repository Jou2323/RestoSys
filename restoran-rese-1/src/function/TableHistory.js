// TableHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableHistory = () => {
  const [tableHistory, setTableHistory] = useState([]);

  useEffect(() => {
    // Отримати історію столиків з JSON-файлу
    axios.get('tableHistory.json') // Вкажіть правильний шлях до файлу
      .then(response => setTableHistory(response.data))
      .catch(error => console.error('Error fetching table history:', error));
  }, []);

  return (
    <div id="table_history">
      <h2>Table History</h2>
      <table>
        <thead>
          <tr>
            <th>№ Номер столику</th>
            <th>Кількість місць</th>
            <th>Місце розташування</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {tableHistory.map(table => (
            <tr key={table.id}>
              <td>{table.tableNumber}</td>
              <td>{table.seats}</td>
              <td>{table.location}</td>
              <td>{table.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHistory;
