import { AppLayoutProps } from "../App";
import styled from "styled-components";

export function FieldContainer(props: AppLayoutProps) {
	const {
		cells,
		setCells,
		gamer,
		setGamer,
		gameIsOver,
		setGameIsOver,
		setWinner,
	} = props.props;

	function onClickButton(e: React.MouseEvent<HTMLDivElement>) {
		const target = e.target as HTMLButtonElement;
		console.log(target.dataset.id);
		const cellId: number = Number(target.dataset.id);
		const newCells: string[] = [...cells];

		if (!newCells[cellId]) {
			console.log(newCells[cellId])
			newCells[cellId] = gamer ? "X" : "O";
			setCells(newCells);

			const winner = checkWinner(cells);

			if (winner === "") {
				const isGameOver = !cells.some((item: string) => item === "");
				setGameIsOver(isGameOver);
				setWinner(isGameOver ? "Ничья" : "");
			} else if (winner === "X") {
				setGameIsOver(true);
				setWinner("X");
			} else if (winner === "O") {
				setGameIsOver(true);
				setWinner("O");
			} else console.log("Из checkWinner() пришло неизвестное значение");

			console.log("Informing", gameIsOver);

			setGamer(!gamer);
		} else {
			console.log("nelzya");
		}
	}

	return (
		<Container onClick={(e) => onClickButton(e)}>
			{cells.map((item, index) => (
				<Cell
					key={index}
					index={index}
					value={item}
					gameIsOver={gameIsOver}
				/>
			))}
		</Container>
	);
}

function Cell(props: CellProps) {
	const { index, value, gameIsOver } = props;
	return (
		<CellButton data-id={index} disabled={gameIsOver}>
			{value}
		</CellButton>
	);
}

function checkWinner(cells: string[]) {
	const winCombinations = [
		[0, 1, 2], 
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	const checkedArray = winCombinations.map((item) => {
		const [a, b, c] = item;
		return cells[a] === cells[b] && cells[b] === cells[c] ? cells[a] : '';
	})

	console.log(checkedArray);

	const result = checkedArray.find((item) => item === 'X' ? "X" : item === "O" ? "O" : '');
	console.log(result);
	return result;
}

interface CellProps {
	index: number;
	value: string;
	gameIsOver: boolean;
}

interface DataIdProps {
	"data-id": number;
}

const Container = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	box-sizing: border-box;
	margin: auto;
	height: 30vw;
	width: 30vw;
`;

const CellButton = styled.button.attrs<DataIdProps>((props) => ({
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