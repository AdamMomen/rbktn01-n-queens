/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


 // var windBoard = window.backBone.prototype;
 // console.log(windBoard.rows())
window.findNRooksSolution = function(n) {
 
      var solution = new Board({'n' :n});
      var rowsArr = solution.rows();
        for (var  i = 0; i < rowsArr.length; i++) {
          for (var j = 0; j < rowsArr.length; j++) {
              solution.togglePiece(i,j);
                if ( solution.hasAnyRooksConflicts()) {
                  solution.togglePiece(i,j);
       }
      }
}
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution.rows();
};
//========================///////////

``




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutioncount = 0 ;
  var board = new Borad({n:n});
  var findsolution = function(row){
    if (row === n) {
      solutioncount++ ;
      return ;
    }
    for (var i = 0; i < n; i++) {
        board.togglePiece(row,i); 
        if (!board1.hasAnyRooksConflicts()){
          findsolution(row+ 1);
        }      
        board.togglePiece(row,i);
     }
  }
  findsolution(0);
  return solutioncount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, 
//with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, 
//with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
