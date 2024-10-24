import { AppLayoutProps } from "./App";
import styled from "styled-components";

//TODO: проверки на null в winner + Ничья

export function FieldContainer(props: AppLayoutProps) {
    const {cells, setCells, gamer, setGamer, gameIsOver, setGameIsOver, setWinner} = props.props;

	function onClickButton(e: any) {
		const cellId = e.target.dataset.id;
		const newCells: string[] = cells;

		if (!newCells[cellId]) {
			newCells[cellId] = gamer ? "X" : "O";
			setCells(newCells);
			const winner = checkWinner(cells)
			switch (winner) {
				case null: setGameIsOver(!cells.some((item: string) => item === ''));
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

interface CellProps {
	index: number, 
	value: string, 
	gameIsOver: boolean
}

function Cell(props: CellProps) {
	const { index, value, gameIsOver } = props;
	return <CellButton data-id={index} disabled={gameIsOver}>{value}</CellButton>;
}

function checkWinner(cells: string[]) {
	console.log(cells)
	if (cells[0] === cells[1] && cells[1] === cells[2]) return cells[0]
	else if (cells[3] === cells[4] && cells[4] === cells[5]) return cells[3]
	else if (cells[6] === cells[7] && cells[7] === cells[8]) return cells[6]
	else if (cells[0] === cells[3] && cells[3] === cells[6]) return cells[0]
	else if (cells[1] === cells[4] && cells[4] === cells[7]) return cells[1]
	else if (cells[2] === cells[5] && cells[5] === cells[8]) return cells[2]
	else if (cells[0] === cells[4] && cells[4] === cells[8]) return cells[0]
	else if (cells[2] === cells[4] && cells[4] === cells[6]) return cells[2]
	else return null;
}

const Container = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	box-sizing: border-box;
	margin: auto;
	height: 30vw;
	width: 30vw;
`;

interface DataIdProps {
	'data-id': number;
}

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