import React from "react";
import styled from "styled-components";

export function FieldContainer(props) {
    const {cells, setCells, gamer, setGamer, gameIsOver, setGameIsOver, checkWinner, setWinner} = props.props;

	function onClickButton(e) {
		const cellId = e.target.dataset.id;
		const newCells = cells;

		if (!newCells[cellId]) {
			newCells[cellId] = gamer ? "X" : "O";
			setCells(newCells);
			const winner = checkWinner()
			switch (winner) {
				case null: setGameIsOver(!cells.some((item) => item === ''));
					break;
				case 'X': 
					setWinner('X');
					setGameIsOver(true);
					break;
				case 'O':
					setWinner('O');
					setGameIsOver(true);
					break;
				default: console.log('Informing', gameIsOver);
			}
			
			setGamer(!gamer);
		} else {
            console.log('nelzya')
        }
	}

	return (
		<Container onClick={(e) => onClickButton(e)}>
			{cells.map((item, index) => (
				<Cell key={index} index={index} value={item} gameIsOver={gameIsOver}></Cell>
			))}
		</Container>
	);
}

function Cell({ index, value, gameIsOver }) {
	return <CellButton data-id={index} disabled={gameIsOver}>{value}</CellButton>;
}

const Container = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	box-sizing: border-box;
	margin: auto;
	height: 30vw;
	width: 30vw;
`;

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