import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const titleChangeHandler = (event) => {
		console.log(event.target.value);
	};

	return (
		<form>
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
						onChange={(event) => console.log(event.target.value)}
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
						onChange={(event) => console.log(event.target.value)}
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
						onChange={(event) => console.log(event.target.value)}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
