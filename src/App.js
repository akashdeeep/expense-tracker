import "./App.css";
import Expenses from "./components/Expenses";

const expenses = [
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
	return (
		<div className="App">
			<h2>What to do? What to do? What to do?</h2>
			{/* <ExpenseItem
				date={new Date(2021, 2, 28)}
				title={"Car Insurance"}
				amount={294.67}></ExpenseItem> */}
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
