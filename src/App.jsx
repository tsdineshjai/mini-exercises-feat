import React from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			return [
				...state,
				{
					todo: action.todo,
					checked: false,
					id: `${uuid()}`,
				},
			];
		}

		case "COMPLETE_TODO": {
			const updatedTodos = state.map((item) => {
				if (item.id !== action.id) {
					return item;
				}
				return {
					...item,
					checked: !item.checked,
				};
			});
			return [...updatedTodos];
		}

		default:
			return state;
	}
}

function App() {
	const [todos, dispatch] = React.useReducer(reducer, []);
	const [todo, setTodo] = React.useState("");
	console.log(todos);

	function handleAddTodo(e) {
		e.preventDefault();
		dispatch({
			type: "ADD_TODO",
			todo,
		});
		setTodo("");
	}

	function handleComplete(id) {
		dispatch({
			type: "COMPLETE_TODO",
			id,
		});
	}
	return (
		<>
			<div id="container">
				<form onSubmit={handleAddTodo}>
					<label htmlFor="todo">
						<input
							type="text"
							name="todo"
							id="todo"
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
						/>
					</label>
					<span> Enter the input</span>
					<br />
				</form>
				<br />
				{todos.length > 0 &&
					todos.map((item) => {
						const { todo, checked, id } = item;

						return (
							<div key={id}>
								<input
									type="checkbox"
									id="complete"
									checked={checked}
									onChange={() => handleComplete(id)}
								/>
								<label htmlFor="complete">
									<span> {checked ? <s>{todo} </s> : todo}</span>
								</label>
							</div>
						);
					})}
			</div>
		</>
	);
}

// eslint-disable-next-line react/prop-types
// function Todo(todoItem, dispatch) {
// 	function handleCheckd(e) {
// 		dispatch({
// 			type: "COMPLETE_TODO",
// 			targetID: todoItem.id,
// 			check: e.checked,
// 		});
// 	}
// 	return (
// 		<div>
// 			<label htmlFor="todo-check">
// 				<input
// 					type="checkbox"
// 					name="todo-item"
// 					id="todo-check"
// 					checked={todoItem.checked == true}
// 					onChange={handleCheckd}
// 				/>
// 				{todoItem.todo}
// 			</label>
// 		</div>
// 	);
// }

export default App;
