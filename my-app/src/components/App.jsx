import React, { useState } from "react";
import "../App.css";
import { FieldContainer } from "./Field";
import { Informing } from "./Information";
import { Restart } from "./Restart";

export function AppContainer() {
  	const emptyArray = ["", "", "", "", "", "", "", "", ""];
	const [cells, setCells] = useState(emptyArray);
	const [gamer, setGamer] = useState(true); //true - крестик, false - это нолик
	const [gameIsOver, setGameIsOver] = useState(false);
	const [winner, setWinner] = useState(null)

	return (
		<AppLayout props={{
				'emptyArray': emptyArray,
				'cells': cells,
				'setCells': setCells,
				'gamer': gamer,
				'setGamer': setGamer,
				'gameIsOver': gameIsOver,
				'setGameIsOver': setGameIsOver,
				'winner': winner,
				'setWinner': setWinner,
			}}>
		</AppLayout>
	);
}

function AppLayout(props) {
	const {emptyArray, cells, setCells, gamer, setGamer, gameIsOver, setGameIsOver, winner, setWinner} = props.props;
	return (
		<>
			<Informing props={{
				'gamer': gamer,
				'gameIsOver': gameIsOver,
				'winner': winner,
				}}></Informing>
			<FieldContainer props={{
				'cells': cells,
				'setCells': setCells,
				'gamer': gamer,
				'setGamer': setGamer,
				'gameIsOver': gameIsOver,
				'setGameIsOver': setGameIsOver,
				'checkWinner': () => checkWinner(cells),
				'setWinner': setWinner,
				}}></FieldContainer>
      		<Restart props={{
        		'cells': cells, 
        		'setCells': setCells, 
        		'emptyArray': emptyArray,
				'setGameIsOver': setGameIsOver,
				'setGamer': setGamer,
				}}></Restart>
		</>
	)
}

function checkWinner(cells) {
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