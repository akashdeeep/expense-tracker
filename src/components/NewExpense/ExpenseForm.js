import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState(""); // [state, function]
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const [enteredAmount, setEnteredAmount] = useState(""); // [state, function]
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const [enteredDate, setEnteredDate] = useState(""); // [state, function]
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const sumbitHandler = (event) => {
		event.preventDefault(); // Prevents the default action of the event from being triggered.
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={sumbitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					{/*
                        The onChange event is triggered when the value of an element has been changed.
                        The event object is accessible to all event handlers in all browsers.
                        The event object contains useful information about the event that was triggered.
                        The target event property returns the element that triggered the event.
                        The value property returns the value of the attribute.
                    */}
					<input
						type="text"
						value={enteredTitle}
						onChange={(event) => titleChangeHandler(event)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					{/*
                        The onChange event is triggered when the value of an element has been changed.
                        The event object is accessible to all event handlers in all browsers.
                        The event object contains useful information about the event that was triggered.
                        The target event property returns the element that triggered the event.
                        The value property returns the value of the attribute.
                    */}
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={(event) => amountChangeHandler(event)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					{/*
                        The onChange event is triggered when the value of an element has been changed.
                        The event object is accessible to all event handlers in all browsers.
                        The event object contains useful information about the event that was triggered.
                        The target event property returns the element that triggered the event.
                        The value property returns the value of the attribute.
                    */}
					<input
						type="date"
						min="2019-01-01"
						max="2024-12-31"
						value={enteredDate}
						onChange={(event) => dateChangeHandler(event)}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
