import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData= {saveExpenseDataHendler}/>
    </div>
  );
};

export default NewExpense;
