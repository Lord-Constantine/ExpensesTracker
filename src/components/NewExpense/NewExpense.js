import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {
    const [isEditing, setIsEditing] = useState(false);

    const addExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        onAddExpense(expenseData)
        setIsEditing(false);
    }

    const onEditingChangeHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

  return (
    <>
    <div className='expense'>
      {!isEditing && <button onClick={onEditingChangeHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={addExpenseDataHandler}/>}
    </div>
    </>
  );
}

export default NewExpense;
