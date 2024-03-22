import styles from "./PersonalInformation.module.css";

function PersonalInformation() {
	return (
		<>
			<div className={styles.personalInfo}>
				<h2>Personal Information</h2>
				<label htmlFor="name">Preferred Name:</label>
				<input type="text" name="name" id="name" />
				<label htmlFor="email">Email Address:</label>
				<input type="email" name="email" id="email" />
			</div>

			<footer className={styles.footer}>
				<button className={styles.reset}>RESET</button>
				<button className={styles.continue}>
					CONTINUE <span>&gt;&gt;</span>
				</button>
			</footer>
		</>
	);
}

export default PersonalInformation;
