import React from "react";
import "./App.css";

function App() {
	const value = React.useRef(null);
	const anotherValue = React.useRef(null);
	value.current = 0;
	anotherValue.current = 0;

	React.useEffect(() => {
		const divRef = document.querySelector(".letterSee");
		const diffRef = document.querySelector(".letterVee");
		function handleEventListener(e) {
			if (e.key == "c") {
				value.current += 10;
				if (value.current > 100) return;
				divRef.style.backgroundSize = `${value.current}% 100%`;
			}
			if (e.key == "v") {
				anotherValue.current += 10;
				if (anotherValue.current > 100) return;
				diffRef.style.backgroundSize = `${anotherValue.current}% 100%`;
			}
		}
		window.addEventListener("keydown", handleEventListener);
		return () => {
			window.removeEventListener("keydown", handleEventListener);
		};
	}, []);

	return (
		<div className="container">
			<div className="letterSee">
				<div className="letterC">C</div>
			</div>
			<div className="letterVee">
				<div className="letterV">V</div>
			</div>
		</div>
	);
}

export default App;
