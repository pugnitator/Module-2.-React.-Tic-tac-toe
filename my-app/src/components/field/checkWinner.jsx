import { store } from "../../ReduxToolkit";

export function checkWinner() {
	const currentState = store.getState();
	const cells = currentState.currentField;
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
	});
	const winner = checkedArray.find((item) => item === 'X' ? "X" : item === "O" ? "O" : '');
	// console.log('checkWinner', winner)
	return winner;
}