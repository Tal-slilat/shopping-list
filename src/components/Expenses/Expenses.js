import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYaer, setFilterYaer] = useState("2020");
  console.log(props);
  const filterChangeHandler = (selectYear) => {
    console.log("Expenses.js");
    console.log(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYaer}
          onSelectedYear={filterChangeHandler}
        />
        {props.items.map((expense, i) => (
          <ExpenseItem
            key={i}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
