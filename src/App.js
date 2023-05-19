import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
	return (
		<div className="App">
			<h2>What to do? What to do? What to do?</h2>
			<ExpenseItem
				date={new Date(2021, 2, 28)}
				title={"Car Insurance"}
				amount={294.67}></ExpenseItem>
		</div>
	);
}

export default App;
