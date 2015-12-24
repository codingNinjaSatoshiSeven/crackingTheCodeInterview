/**
 * Prompt: Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (!board || board.length<1 || board[0].length <1){ // invalid case
        	return false;
        } 

 	// check rows
 	
 	for (var j=0; j<board.length; j++){
 		var rowHash ={};
 		for (var i = 0; i<board[j].length; i++){
 			if (board[j][i] !== '.'){
 				if (rowHash[board[j][i]] === undefined){
 					rowHash[board[j][i]] =true; 
 				} else {
 					return false;
 				}
 			}
 		}
 	}
 	
    
 	
 	for (var j=0; j<board[0].length; j++){
 		var colHash ={};
 		for (var i =0; i<board.length; i++){
 			if (board[i][j] !== '.'){
 				if (colHash[board[i][j]] === undefined){
 					colHash[board[i][j]] =true; 
 				} else {
 					return false;
 				}
 			}
 		}
 	}

};