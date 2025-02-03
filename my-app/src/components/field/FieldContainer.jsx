import { useDispatch, useSelector } from "react-redux";
import { setCell, setGameIsOver, setWinner, switchGamer } from "../../ReduxToolkit/slice";
import { checkWinner } from "./checkWinner";
import styled from "styled-components";
import { Cell } from "./Cell";

export function FieldContainer() {
	const currentField = useSelector((state) => state.currentField);
	const dispatch = useDispatch();

	function onClickButton(e) {
		const target = e.target;
		const cellId = Number(target.dataset.id);

		dispatch(setCell(cellId));

		const winner = checkWinner();

		dispatch(setWinner(winner));
		dispatch(setGameIsOver());
		dispatch(switchGamer());
	}

	return (
		<Container onClick={(e) => onClickButton(e)}>
			{currentField.map((item, index) => (
				<Cell key={index} index={index} value={item} />
			))}
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	box-sizing: border-box;
	margin: auto;
	height: 30vw;
	width: 30vw;
`;