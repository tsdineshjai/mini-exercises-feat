/* eslint-disable react/prop-types */
import React from "react";

import styles from "./FoodOrder.module.css";

const Days = [
	{ label: "Monday", value: "monday" },
	{ label: "Tuesday", value: "teusday" },
	{ label: "Wednesday", value: "wednesday" },
	{ label: "Thursday", value: "thursday" },
	{ label: "Friday", value: "friday" },
	{ label: "Saturday", value: "saturday" },
	{ label: "Sunday", value: "sunday" },
];

function FoodOrder() {
	const [selectedDays, setSelectedDays] = React.useState({});

	function handleToggle(value, nextChecked) {
		setSelectedDays({
			...selectedDays,
			[value]:
				typeof nextChecked == "boolean" ? nextChecked : selectedDays[value],
		});
	}

	return (
		<div className={styles.foodOrder}>
			<h1>FoodOroma Order Form</h1>
			<p>Sign Up to recieve daily meal delivery service</p>
			<MultiChekboxDays
				options={Days}
				selectedValues={selectedDays}
				handleToggle={handleToggle}
			/>
		</div>
	);
}

export default FoodOrder;

function MultiChekboxDays({ options, handleToggle, selectedValues }) {
	const [isSelectingModeOn, setIsSelectingModeOn] = React.useState(null);
	const id = React.useId();
	return (
		<div className={styles.days}>
			<h3>Select Days:</h3>
			{options.map(({ label, value }) => {
				const optionId = `multicheck-days-${value}-${id}`;
				const currentChecked = !!selectedValues[value];
				const nextChecked = !currentChecked;
				return (
					<li
						key={optionId}
						onMouseDown={() => {
							handleToggle(value);
							setIsSelectingModeOn(nextChecked);
						}}
						onMouseEnter={() => {
							if (isSelectingModeOn == null) return;
							handleToggle(value, isSelectingModeOn);
						}}
						onMouseUp={() => {
							setIsSelectingModeOn(null);
						}}
					>
						<input
							type="checkbox"
							name=""
							id={optionId}
							value={value}
							checked={selectedValues[value]}
						/>
						<label htmlFor={optionId}>{label}</label>
					</li>
				);
			})}
			<button type="button">Confirm Order</button>
		</div>
	);
}
//here when will click on the input:type:checkbox with the mouse button, mouseDownEvent generates
//due to property of event bubbling, the event goes to the parent, grand and untill it reaches the root
//on the way it will trigger the event handlers listening to that particular event.
//so the event handler in li event catches the event.
