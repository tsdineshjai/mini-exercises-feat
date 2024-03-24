/* eslint-disable no-undef */
import React from "react";
import styles from "./Profile.module.css";

function Profile() {
	const [show, setShow] = React.useState(false);
	function handleClick() {
		setShow(!show);
	}

	/* 
	alternative appraoch without using querySlector.
	add a  ref to profile div.
	check using Node.contains(isElementExistsInside) //returns Boolean

	function handleGlobalClick(e){
		if( !ref.current.contains(e.target)){
			...do the neccessary
		}
	}
	
	*/

	React.useEffect(() => {
		if (show === false) return;
		const nodeListExceptProfileDiv =
			document.querySelectorAll("div:not(#image)");

		nodeListExceptProfileDiv.forEach((item) => {
			item.addEventListener("click", handleGlobalClick);
		});
		function handleGlobalClick() {
			setShow(false);
		}
		return () => {
			nodeListExceptProfileDiv.forEach((item) => {
				item.removeEventListener("click", handleGlobalClick);
			});
		};
	}, [show]);

	return (
		<div className={styles.profile}>
			<div className={styles.image} onClick={handleClick} id="image"></div>

			{show && (
				<div className={styles.profileContent} id="profile">
					<p>My Account</p>
					<p>Statistics</p>
					<p>Log Out</p>
				</div>
			)}
		</div>
	);
}

export default Profile;
