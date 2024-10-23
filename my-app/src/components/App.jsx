import React, {useState} from 'react';
import '../App.css';
import { FieldLayout } from './Field';

export function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gamer, setGamer] = useState(true); 	//true - крестик, false - это нолик
  return (
      <FieldLayout props = {{'cells': cells, 'setCells': setCells, 'gamer': gamer, 'setGamer': setGamer}}></FieldLayout>
  );
}