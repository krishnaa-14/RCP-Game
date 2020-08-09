
function reload() {
  location.reload();
}


var player_count=0;
var comp_count=0;

const buttons = document.querySelectorAll("button");


for (var i = 0; i < 3; i++) {
  buttons[i].addEventListener('click', playGame);
}

var round=0;

function playGame(e) {


  document.getElementById("value").innerHTML="Round " + round;
  round++;

  var playerSel = e.target.innerText;

  var comp_selection = ["Rock", "Paper", "Scissors"]
  var n = Math.random();
  n = n * 3;
  n = Math.floor(n);
  var compSel = comp_selection[n];

  var result=checkWinner(playerSel,compSel);

  console.log(playerSel,compSel);

  if(result==='Player') {

    player_count++;

    document.getElementById("demo").innerHTML="Hey You won this round :)";

  }

  else if(result==='Computer') {

    comp_count++;

    document.getElementById("demo").innerHTML="You Lose this round :( ";
  }

  else {
    document.getElementById("demo").innerHTML="Its a draw !! ";
  }



  document.getElementById("User").innerHTML="Player Score : " + player_count;
  document.getElementById("Computer").innerHTML="Computer Score : " + comp_count;



}


function checkWinner(player, computer) {
  if (player === computer) {
    return 'Draw';
  }

  if (player === 'Rock') {
    if (computer === 'Paper') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }

  if (player === 'Paper') {
    if (computer === 'Scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }

  if (player === 'Scissors') {
    if (computer === 'Rock') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
}
