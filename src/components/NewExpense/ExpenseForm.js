import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text'></input>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number'></input>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2022-02-15"></input>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
