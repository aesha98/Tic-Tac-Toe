/**
 * Project: Tic Tac Toe
 * author: @aesha98
 * 
 * Gameboard -> Represent state of the board
 * Player -> represent the player
 * Enemy -> represent the enemy
 */

/* Gameboard factory function*/
function Gameboard(){
	const row = 3;
	const col = 3;
	let board = [];

	for (let i = 0; i < row; i++){
		board[i] = []
		for (let j = 0; j < col; j++) {
			console.log(board[i].push(''));
		}
	}

	const getBoard = () => board;

	return {getBoard}
}

/* IIFE */
const gameboard = (function (){

})();

/*
  ** A Cell represents one "square" on the board and can have one of
  ** 0: no token is in the square,
  ** 1: Player One's token,
  ** 2: Player 2's token
  */
function Cell(){

	let marker = 0;

	const addMarker = (player) => marker++;

	return {addMarker}

}

function DisplayController(){

}

const game = Gameboard();
