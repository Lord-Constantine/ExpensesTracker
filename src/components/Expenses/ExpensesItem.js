import React from 'react';
import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';

const ExpensesItem = ({ title, amount, date}) => {
  return (
    <li>
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    </li>
  );
}

export default ExpensesItem;
