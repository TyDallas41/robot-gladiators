// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log( playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

fight();

console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i +" index");
}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){

    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to choose.");
    if(promptFight === "fight" ||promptFight === "FIGHT"){
        
        enemyHealth = enemyHealth - playerAttack;

        console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemy's health
        if (enemyHealth <= 0){

            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //player health afert enemy attack
        playerHealth = playerHealth - enemyAttack;

        console.log(
            enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if(playerHealth <= 0){
            window.alert(playerName + " has died!");
        } else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP"){

        //confirm player 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes leave fight
        if(confirmSkip){
            
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney = playerMoney - 2;
        } 
        else {
            fight();
    }
}

//fight();
for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}