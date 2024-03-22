import React from "react";

function useScrollX() {
	const [ScrollY, setScrollY] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		function handleScroll() {
			setScrollY({
				...ScrollY,
				x: Math.floor(window.scrollX),
				y: Math.floor(window.scrollY),
			});
		}
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [ScrollY]);

	return ScrollY;
}

export default useScrollX;
