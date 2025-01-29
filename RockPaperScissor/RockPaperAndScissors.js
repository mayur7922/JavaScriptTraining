const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let choices = ["Rock", "Paper", "Scissors"];

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
};

const decideWinner = (player1, player2) => {
    if(player1 == "Rock"){
        if(player2 == "Rock"){
            return "Tie";
        }
        else if(player2 == "Paper"){
            return "Player2";
        }
        else if(player2 == "Scissors"){
            return "Player1";
        }
    }
    else if(player1 == "Paper"){
        if(player2 == "Rock"){
            return "Player1";
        }
        else if(player2 == "Paper"){
            return "Tie";
        }
        else if(player2 == "Scissors"){
            return "Player2";
        }
    }
    else if(player1 == "Scissors"){
        if(player2 == "Rock"){
            return "Player2";
        }
        else if(player2 == "Paper"){
            return "Player1";
        }
        else if(player2 == "Scissors"){
            return "Tie";
        }
    }
};

const main = async () => {

  let points1 = 0, points2 = 0, round = 1;

  while(points1 < 5 && points2 < 5){

    let player1 = "", player2 = "";

    console.log(`Round ${round}`);

    const answer1 = await askQuestion(
        `
        Enter 1 for Rock \n
        Enter 2 for Paper \n
        Enter 3 for Scissors \n
        Enter choice of user1 : \n
        `
    );

    if (answer1 == 1) {
        player1 = choices[0];
    } else if (answer1 == 2) {
        player1 = choices[1];
    } else {
        player1 = choices[2];
    }

    const answer2 = await askQuestion(
        `
        Enter 1 for Rock \n
        Enter 2 for Paper \n
        Enter 3 for Scissors \n
        Enter choice of user2 : \n
        `
    );

    if (answer2 == 1) {
        player2 = choices[0];
    } else if (answer2 == 2) {
        player2 = choices[1];
    } else {
        player2 = choices[2];
    }

    let winner = decideWinner(player1, player2);
    
    if(winner == "Tie"){

    }
    else if(winner == "Player1"){
        points1++;
    }
    else if(winner == "Player2"){
        points2++;
    }

    console.log("\n");

    round++;
  }

  rl.close();

  let winner = "";

  if(points1 == 5) winner = "Player 1";
  else winner = "Player 2";

  console.log(`Winner of the game is : ${winner}`);

};


main();