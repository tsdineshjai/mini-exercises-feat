/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Steplist.module.css";

function Steplist({ steps, stepValue, handleClick }) {
	return (
		<div className={styles.steplist}>
			{steps.map((step) => (
				<div
					key={step.value}
					className={`${styles.step}  ${
						stepValue == step.value ? styles.selected : null
					}`}
				>
					<button onClick={() => handleClick(step.value)}>{step.value}</button>
					<h4>{step.label}</h4>
				</div>
			))}
		</div>
	);
}

export default Steplist;
