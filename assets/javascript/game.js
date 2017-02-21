$(document).ready(function() {


// create gameState object with main variables in it. 
var gameState = {
	yourCharacter: "",
	enemyCharacters: [],
	defenderCharacter: "",
	damageTaken: 0,
	damageGiven: 0,
	healthPoints: 0,

}


// define each character, base dmg and hp. 
var ironMan = {
	healthPoints: 120,
	attackDamage: 8,

}

var thorsHammer = {
	healthPoints: 150,
	attackDamage: 15,

}

var captainAmerica = {
	healthPoints: 140,
	attackDamage: 15,
}

var hulkSmash = {
	healthPoints: 200,
	attackDamage: 25,
}


function ironnMan() {

}
//create on click function to move characters after someone selects first target. 
	
if ( $(".LegoIronMan").click()) {
	$(".chosenCharacter").append($(".LegoIronMan"));
	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
	$(".enemyCharacters").append($(".LegoThor"));
	$(".enemyCharacters").append($(".LegoHulk"));
} else if ( $(".LegoCaptainAmerica").click()) {
	$(".chosenCharacter").append($(".LegoCaptainAmerica"));
	$(".enemyCharacters").append($(".LegoIronMan"));
	$(".enemyCharacters").append($(".LegoThor"));
	$(".enemyCharacters").append($(".LegoHulk"));
} else if ( $(".LegoThor").click()) {
	$(".chosenCharacter").append($(".LegoThor"));
	$(".enemyCharacters").append($(".LegoIronMan"));
	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
	$(".enemyCharacters").append($(".LegoHulk"));
} else if ($(".LegoHulk").click()) {
	$(".chosenCharacter").append($(".LegoHulk"));
	$(".enemyCharacters").append($(".LegoIronMan"));
	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
	$(".enemyCharacters").append($(".LegoThor"));
}
	// $(".LegoCaptainAmerica").on("click", function() {
	// 	$(".chosenCharacter").append($(".LegoCaptainAmerica"));
	// });
	// $(".LegoThor").on("click", function() {
	// 	$(".chosenCharacter").append($(".LegoThor"));
	// });
	// $(".LegoHulk").on("click", function() {
	// 	$(".chosenCharacter").append($(".LegoHulk"));
	// });
// Create function for attacking. 
// function for attack button. Make button look cooler. 
// restart button for after you win/lose. 

})