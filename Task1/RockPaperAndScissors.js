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
            console.log("Tie");
        }
        else if(player2 == "Paper"){
            console.log("Player 2 won");
        }
        else if(player2 == "Scissors"){
            console.log("Player 1 won");
        }
    }
    else if(player1 == "Paper"){
        if(player2 == "Rock"){
            console.log("Player 1 won");
        }
        else if(player2 == "Paper"){
            console.log("Tie");
        }
        else if(player2 == "Scissors"){
            console.log("Player 2 won");
        }
    }
    else if(player1 == "Scissors"){
        if(player2 == "Rock"){
            console.log("Player 2 won");
        }
        else if(player2 == "Paper"){
            console.log("Player 1 won");
        }
        else if(player2 == "Scissors"){
            console.log("Tie");
        }
    }
};

const main = async () => {
  let player1 = "", player2 = "";

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

  rl.close();

//   console.log(player1);
//   console.log(player2);

  decideWinner(player1, player2);

};


main();