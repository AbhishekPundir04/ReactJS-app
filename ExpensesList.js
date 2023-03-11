import React from "react";

import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpenseList = (props) =>{
  // if(props.items.length === 0){
  //   return <h2 className="expenses-list__fallback">Found No expenses</h2>
  // }
  if(props.items.length <= 1){
    return <h2 className="expenses-list__fallback">Please Add more</h2>
  }

  return <ul className="expense-list">
    {props.items.map((expense) => (
      <ExpenseItem
        keys={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
}

export default ExpenseList;