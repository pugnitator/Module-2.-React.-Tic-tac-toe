import React, { useState } from "react";
import styled from "styled-components";

export function FieldLayout() {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    //true - крестик, false - это нолик
    const [gamer, setGamer] = useState(true);

	const Container = styled.div`
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        box-sizing: border-box;
        margin: auto;
        height: 40vw;
        width: 40vw;
	`;

	function onClickButton(e) {
		const cellId = e.target.dataset.id;
        console.log(e);
        const newCells = cells;
        newCells[cellId] = gamer ? 'X' : 'O';
        console.log(newCells);
        setCells(newCells);
        setGamer(!gamer)
	}

	return (
		<Container onClick={(e) => onClickButton(e)}>
			{cells.map((item, index) => (
				<Cell key={index} index={index} value={item}></Cell>
			))}
		</Container>
	);
}

function Cell({index, value}) {
	const CellButton = styled.button.attrs(props => ({'data-id': props['data-id']}))`
		background-color: #f4faff;
		border: 1px solid #2E9AFF;
        &:hover {
            background-color: #E6EBF0;
            cursor: pointer;
        };
        font-size: 50px;
	`;
	return <CellButton data-id={index}>{value}</CellButton>;
}
