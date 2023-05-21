import { useState } from "react";

import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expenses = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(6489, 2, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(dummy_expenses); // [state, function

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			{/* <ExpenseItem
				date={new Date(2021, 2, 28)}
				title={"Car Insurance"}
				amount={294.67}></ExpenseItem> */}
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
