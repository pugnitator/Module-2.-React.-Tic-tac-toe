import React from "react";
import styled from "styled-components";

export function FieldLayout(props) {
    const {cells, setCells, gamer, setGamer} = props.props;
    console.log(props.props)

	const Container = styled.div`
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
		box-sizing: border-box;
		margin: auto;
		height: 40vw;
		width: 40vw;
	`;

	function onClickButton(e) {
		// TODO: Нельзя менять значение, если оно не undefiend + красная подсветка
		const cellId = e.target.dataset.id;
		console.log(e);
		const newCells = cells;
		if (!newCells[cellId]) {
			newCells[cellId] = gamer ? "X" : "O";
			setCells(newCells);
			setGamer(!gamer);
		} else {
            console.log('nelzya')
        }
	}

	return (
		<Container onClick={(e) => onClickButton(e)}>
			{cells.map((item, index) => (
				<Cell key={index} index={index} value={item}></Cell>
			))}
		</Container>
	);
}

function Cell({ index, value }) {
	const CellButton = styled.button.attrs((props) => ({
		"data-id": props["data-id"],
	}))`
		background-color: #f4faff;
		border: 1px solid #2e9aff;
		&:hover {
			background-color: #e6ebf0;
			cursor: pointer;
		}
		font-size: 50px;
	`;
	return <CellButton data-id={index}>{value}</CellButton>;
}
