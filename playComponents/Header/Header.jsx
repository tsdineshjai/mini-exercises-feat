import React from "react";
import styles from "./Header.module.css";
import Steplist from "../Steplist";
import PersonalInformation from "../PersonalInformation";

function Header() {
	const [step, setStep] = React.useState(1);

	function handleClick(value) {
		setStep(Number(value));
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
		</>
	);
}

export default Header;
