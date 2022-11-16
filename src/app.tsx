import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BudgetPal from './budget-pal/BudgetPal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BudgetPal />
  </React.StrictMode>
);
