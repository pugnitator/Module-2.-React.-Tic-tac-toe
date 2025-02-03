import { createSlice } from "@reduxjs/toolkit";

export const X_GAMER = 'X';
export const O_GAMER = 'O';

const initialState = {
    winner: "",
    currentField: ["", "", "", "", "", "", "", "", ""],
    currentGamer: X_GAMER,
    gameIsOver: false,
}

const appSlice = createSlice({
	name: "appSlise",
	initialState: initialState,
    reducers: {
        setCell(state, action) {
            state.currentField[action.payload] = state.currentGamer;
        },

        setWinner(state, action) {
            state.winner = action.payload;
        },

        setGameIsOver(state) {
            state.gameIsOver = state.winner || !state.currentField.includes('');
        },

        switchGamer(state) {
            state.currentGamer = state.currentGamer === X_GAMER ? O_GAMER : X_GAMER;
        },

        startNewGame() {return initialState}
    }
});

export default appSlice.reducer;
export const {setCell, setWinner, switchGamer, startNewGame, setGameIsOver} = appSlice.actions;