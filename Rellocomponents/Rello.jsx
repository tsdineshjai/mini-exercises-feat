import React from "react";
import styles from "./Rello.module.css";
import { produce } from "immer";

function Rello() {
	const [columns, setColumns] = React.useState([
		{
			heading: "Upcoming",
			columnId: "column-a",
			cards: [
				{
					id: "a",
					task: "Buy Cat food",
				},
				{
					id: "b",
					task: "Finish Daily Tasks",
				},
			],
		},
		{
			heading: "Finished",
			columnId: "column-b",
			cards: [
				{
					id: "c",
					task: "Kill Demons",
				},
				{
					id: "d",
					task: "Overcome Procastrination",
				},
			],
		},
	]);
	const [draggedItemID, setDraggedItemID] = React.useState(null);

	function handleSelectItem(targetID) {
		setDraggedItemID(targetID);
	}

	function handleItemDrop(columnId) {
		if (!draggedItemID) return;

		/* we recieved the columndID (hoveredCOlumn and releasee the mouse button), means 
    we know the column where we gonna drop the item
      but we need the column from where the item is selected.
      Both are required. item from the selected column needs to be droppe and it is added
      to the hovered columnID
    */

		const dragginColumnIndex = columns.findIndex((column) =>
			column.cards.some((card) => card.id == draggedItemID)
		);
		const dragginColumnID = columns[dragginColumnIndex].columnId;
		if (dragginColumnID === columnId) return;

		const dropColumn = columns.findIndex(
			(column) => column.columnId === columnId
		);

		const findTheItem = columns[dragginColumnIndex].cards.find(
			(card) => card.id === draggedItemID
		);
		const findIndexTobeRemoved = columns[dragginColumnIndex].cards.findIndex(
			(card) => card.id === draggedItemID
		);

		setColumns(
			produce(columns, (draftState) => {
				draftState[dragginColumnIndex].cards.splice(findIndexTobeRemoved, 1);
				draftState[dropColumn].cards.push(findTheItem);
			})
		);
		setDraggedItemID("");
	}

	return (
		<div className={styles.relloContainer}>
			{columns.map(({ heading, columnId, cards }) => {
				return (
					<div
						key={columnId}
						className={styles.upcoming}
						onMouseUp={() => handleItemDrop(columnId)}
					>
						<header>{heading}</header>
						<div className={styles.cards}>
							{cards.map(({ id, task }) => {
								const selectedItem = draggedItemID === id;
								return (
									<button
										key={id}
										onMouseDown={() => handleSelectItem(id)}
										style={{ opacity: selectedItem ? 0.5 : 1 }}
									>
										{task}
									</button>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Rello;
