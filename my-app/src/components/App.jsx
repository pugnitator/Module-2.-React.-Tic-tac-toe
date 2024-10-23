import React, { useState } from "react";
import "../App.css";
import { FieldLayout } from "./Field";
import { Informing } from "./Information";
import { Restart } from "./Restart";

export function App() {
  const emptyArray = ["", "", "", "", "", "", "", "", ""]
	const [cells, setCells] = useState(emptyArray);
	const [gamer, setGamer] = useState(true); //true - крестик, false - это нолик
	const [gameIsOver, setGameIsOver] = useState(false);

	return (
		<>
			<Informing
				props={{
					'gamer': gamer,
					'cells': cells,
					'gameIsOver': gameIsOver,
				}}></Informing>
			<FieldLayout
				props={{
					'cells': cells,
					'setCells': setCells,
					'gamer': gamer,
					'setGamer': setGamer,
				}}></FieldLayout>
      <Restart props={{
        'cells': cells, 
        'setCells': setCells, 
        'emptyArray': emptyArray}}></Restart>
		</>
	);
}