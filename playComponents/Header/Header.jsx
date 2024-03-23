import React from "react";
import styles from "./Header.module.css";
import Steplist from "../Steplist";
import PersonalInformation from "../PersonalInformation";

function Header() {
	const [step, setStep] = React.useState(1);

	function handleClick(value) {
		setStep(Number(value));
	}
	function footerHandleClick() {
		if (step >= 4) return;
		setStep((currentValue) => currentValue + 1);
	}
	return (
		<>
			<div className={styles.header}>
				<Steplist
					steps={[
						{ value: 1, label: "Info" },
						{ value: 2, label: "Plan" },
						{ value: 3, label: "Summary" },
					]}
					stepValue={step}
					handleClick={handleClick}
				/>
			</div>
			{step === 1 && <PersonalInformation />}
			<footer className={styles.footer}>
				<button className={styles.reset}>RESET</button>
				<button className={styles.continue} onClick={footerHandleClick}>
					{step >= 3 ? "SUBMIT" : "CONTINUE"} <span>&gt;&gt;</span>
				</button>
			</footer>
		</>
	);
}

export default Header;
