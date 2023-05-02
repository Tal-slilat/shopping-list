import React, { useEffect, useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Update");
    console.log(title);
  }

  useEffect(() => {
    setTitle(props.title);
  },[props.title]);

  return (
    <Card className="expense-item"  id={props.id}>
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description" id={props.id}>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ clickHandler } >Change Title!</button>

    </Card>
  );
}

export default ExpenseItem;