import { useState } from "react";
import "../App.css";
import { FieldContainer } from "./Field";
import { Informing } from "./Information";
import { Restart } from "./Restart";

export function AppContainer() {
  	const emptyArray: string[] = ["", "", "", "", "", "", "", "", ""];
	const [cells, setCells] = useState(emptyArray);
	const [gamer, setGamer] = useState(true); //true - крестик, false - это нолик
	const [gameIsOver, setGameIsOver] = useState(false);
	const [winner, setWinner] = useState('')

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
			}}/>
	);
}

function AppLayout(props: AppLayoutProps) {
	return (
		<>
			<Informing props={props.props}/>
			<FieldContainer props={props.props}/>
      		<Restart props={props.props}/>
		</>
	)
}

export interface AppLayoutProps{
	props: {
		emptyArray: string[], 
		cells: string[], 
		setCells: React.Dispatch<React.SetStateAction<string[]>>, 
		gamer: boolean, 
		setGamer: React.Dispatch<React.SetStateAction<boolean>>, 
		gameIsOver: boolean, 
		setGameIsOver: React.Dispatch<React.SetStateAction<boolean>>, 
		winner: string | null , 
		setWinner: React.Dispatch<React.SetStateAction<string>>,
	}
}