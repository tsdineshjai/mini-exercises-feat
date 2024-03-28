export function Assignment1() {
	const [input, setInput] = React.useState(0);
	// Your solution starts here
	// Your solution ends here

	const ExpensiveCaluction = React.useCallback((input) => {
		if (input <= 1) return input;
		return input * ExpensiveCaluction(input - 1);
	}, []);

	const expensiveValue = React.useMemo(() => {
		const value = ExpensiveCaluction(input);
		return value;
	}, [ExpensiveCaluction, input]);

	console.log(expensiveValue);

	return (
		<div>
			<input
				type="number"
				value={input}
				onChange={(e) => setInput(Number(e.target.value))}
			/>
			<p>Calculated Value: {expensiveValue}</p>
		</div>
	);
}

export function Assignment2() {
	const [sentences, setSentences] = React.useState(ALL_WORDS);
	const [filter, setFilter] = React.useState("");

	const filteredSentences = React.useMemo(() => {
		const filteredSentcs = sentences.filter((sentence) =>
			sentence.includes(filter)
		);
		return filteredSentcs;
	}, [filter, sentences]);

	return (
		<div>
			<span style={{ color: "white" }}>Filter</span>
			<input
				type="text"
				onChange={(e) => {
					setFilter(e.target.value);
				}}
			></input>
			<br />
			{filteredSentences.map((word) => (
				<div key={Math.random() * 45456456456}>{word}</div>
			))}
		</div>
	);
}

export const Assignment3 = () => {
	const [items, setItems] = React.useState([
		{ name: "Chocolates", value: 10 },
		{ name: "Chips", value: 20 },
		{ name: "Onion", value: 30 },
		{ name: "Tomato", value: 30 },
		// Add more items as needed
	]);
	/* 	You have been given a list of items you shopped from the grocery store
You need to calculate the total amount of money you spent	*/
	// Your code starts here

	const totalValue = React.useMemo(() => {
		const value = items.reduce((accu, current) => accu + current.value, 0);
		return value;
	}, [items]);

	// Your code ends here
	return (
		<div>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.name} - Price: ${item.value}
					</li>
				))}
			</ul>
			<p>Total Value: {totalValue}</p>
		</div>
	);
};
