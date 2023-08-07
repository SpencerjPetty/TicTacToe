//Defining the different types of spaces
let playerX = " X ";
let compO = " O ";
let blankSpace = " + ";


//Function for the computer's turn
function compTurn() {
    //checking if the computer should go
    if (document.getElementById("gameStatus").innerHTML == "Computer's turn!") {
    let compNum;
    let compID;
    let success;
    let codeBreak = 0; // in the rare occurrence the player does the last move, this will make sure there's no infinite loop
    do {
    codeBreak++;
    if (codeBreak > 50) { //This will break the loop if the game is a tie and the player goes last
        document.getElementById("gameStatus").innerHTML = "Look's like the game's a tie! Wanna go again?";
        break;
    };
    success = false;
    compNum = Math.ceil(Math.random() * 9);
    compID = "slot" + compNum;
    if (document.getElementById(compID).innerHTML == " + ") { //checking if it's a blank space
            document.getElementById(compID).innerHTML = " O ";
            success = true;
            document.getElementById("gameStatus").innerHTML = "Your turn!";
            checkWin();
    }
    }
    while (success == false); //If it's not, it'll loop until it finds one, making it totally random
};
};

//Function for the player clicking and doing his turn
function playerTurn(slot) {
    var id = slot.id; //getting the id of the slot clicked
    if (document.getElementById("gameStatus").innerHTML == "Your turn!") { //checking if they've started the game yet
    if (document.getElementById(id).innerHTML == blankSpace) { //Checking if the space is blank or not
        document.getElementById(id).innerHTML = playerX;
        document.getElementById("gameStatus").innerHTML = "Computer's turn!"
        checkWin(); //Checking if anyone's won yet
        compTurn(); //if not, the computer goes
    } else {
        alert("Choose an open space!"); //Alert for if they choose an already occupied space
    }

} else {
    alert("Please press 'Start game' to start!"); //Making sure no inputs are made before or after games
}
}

//Function to ask who will go first
function start() {
    for (let x = 1; x < 10; x++) {
        let slotClearer = "slot" + x;
    document.getElementById(slotClearer).innerHTML = blankSpace; //clearing the game just in case they don't press "reset game"
    }
//prompt asking who should go first
    let whoGoesFirst = prompt("Who do you want to go first? Type 'me' if you want to go first, or 'comp' for the computer to start");
if (whoGoesFirst == "me") {
    document.getElementById("gameStatus").innerHTML = "Your turn!";
} else if (whoGoesFirst == "comp") {
    document.getElementById("gameStatus").innerHTML = "Computer's turn!"
    compTurn();
    document.getElementById("gameStatus").innerHTML = "Your turn!"

} else {
    alert("Please enter a valid response!");
};
};

//The winning message
function playerWins() {
    document.getElementById("gameStatus").innerHTML = "Good job! You beat the computer!";
};

//The losing message
function compWins() {
    document.getElementById("gameStatus").innerHTML = "Aw man, the computer won! Better luck next time.";
};
//Function for checking if anyone has won yet
function checkWin() {
    let slot1Status = document.getElementById("slot1").innerHTML;
    let slot2Status = document.getElementById("slot2").innerHTML;
    let slot3Status = document.getElementById("slot3").innerHTML;
    let slot4Status = document.getElementById("slot4").innerHTML;
    let slot5Status = document.getElementById("slot5").innerHTML;
    let slot6Status = document.getElementById("slot6").innerHTML;
    let slot7Status = document.getElementById("slot7").innerHTML;
    let slot8Status = document.getElementById("slot8").innerHTML;
    let slot9Status = document.getElementById("slot9").innerHTML;

    //checking for ties
    for (let i = 1; i < 10; i++) {
        let slotChecker = "slot" + i;
        if (document.getElementById(slotChecker).innerHTML == " + ") {
            break;
        } else if (i == 9) {
            document.getElementById("gameStatus").innerHTML = "Look's like the game's a tie! Wanna go again?";
        };
    };
    //Checking top horizontal win
    if (slot1Status == slot2Status && slot1Status == slot3Status) {
        if (slot1Status == playerX) {
            playerWins();    
        } else if (slot1Status == compO) {
            compWins();
        };
    //checking middle horizontal win
    } else if (slot4Status == slot5Status && slot4Status == slot6Status) {
        if (slot4Status == playerX) {
            playerWins();    
        } else if (slot4Status == compO) {
            compWins();
        }
    //checking bottom horizontal win
    } else if (slot7Status == slot8Status && slot7Status == slot9Status) {
        if (slot7Status == playerX) {
            playerWins();    
        } else if (slot7Status == compO) {
            compWins();
        }
    //checking left vertical win
    } else if (slot1Status == slot4Status && slot1Status == slot7Status) {
        if (slot1Status == playerX) {
            playerWins();    
        } else if (slot1Status == compO) {
            compWins();
        }
    //checking middle vertical win    
    } else if (slot2Status == slot5Status && slot2Status == slot8Status) {
        if (slot2Status == playerX) {
            playerWins();    
        } else if (slot2Status == compO) {
            compWins();
        }
    //checking right vertical win    
    } else if (slot3Status == slot6Status && slot3Status == slot9Status) {
        if (slot3Status == playerX) {
            playerWins();    
        } else if (slot3Status == compO) {
            compWins();
        }
    //checking \ diagonal win    
    } else if (slot1Status == slot5Status && slot1Status == slot9Status) {
        if (slot1Status == playerX) {
            playerWins();    
        } else if (slot1Status == compO) {
            compWins();
        }
    //checking / diagonal win    
    } else if (slot3Status == slot5Status && slot3Status == slot7Status) {
        if (slot3Status == playerX) {
            playerWins();    
        } else if (slot3Status == compO) {
            compWins();
        }
        
    }
    
};

