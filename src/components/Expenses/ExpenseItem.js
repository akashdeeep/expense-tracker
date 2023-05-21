import { useState } from "react";

import ExpensDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	return (
		<Card className="expense-item">
			<ExpensDate date={props.date} />
			<div className="expense-item__descripetion">
				<h2>{props.title}</h2>
				<div className="expense-item__price">{props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
