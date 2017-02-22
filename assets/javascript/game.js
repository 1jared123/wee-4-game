$(document).ready(function() {


// create gameState object with main variables in it. 
var gameState = {
	yourCharacter: "",
	enemyCharacters: "",
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

var captainAmerica = {
	healthPoints: 100,
	attackDamage: 5,
}

var thorsHammer = {
	healthPoints: 150,
	attackDamage: 20,
}

var hulkSmash = {
	healthPoints: 100,
	attackDamage: 25,
}


// function ironnMan() {

// }
//create on click function to move characters after someone selects first target. 
	
// $(".LegoIronMan").on("click", function() {

// 	$(".chosenCharacter").append($(".LegoIronMan"));
// 	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
// 	$(".enemyCharacters").append($(".LegoThor"));
// 	$(".enemyCharacters").append($(".LegoHulk"));
// 	gameState.yourCharacter = "ironMan";
// 	gameState.enemyCharacters = "thorsHammer";
// 	console.log("I think somethings up...");
// })
// $(".LegoCaptainAmerica").click(function() {
// 	$(".chosenCharacter").append($(".LegoCaptainAmerica"));
// 	$(".enemyCharacters").append($(".LegoIronMan"));
// 	$(".enemyCharacters").append($(".LegoThor"));
// 	$(".enemyCharacters").append($(".LegoHulk"));
// 	gameState.yourCharacter.push(captainAmerica);
// 	gameState.enemyCharacters.push(ironMan, thorsHammer, hulkSmash);
// });
// $(".LegoThor").click(function() {
// 	$(".chosenCharacter").append($(".LegoThor"));
// 	$(".enemyCharacters").append($(".LegoIronMan"));
// 	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
// 	$(".enemyCharacters").append($(".LegoHulk"));
// 	gameState.yourCharacter.push(thorsHammer);
// 	gameState.enemyCharacters.push(ironMan, captainAmerica, hulkSmash);
// });
// $(".LegoHulk").click(function() {
// 	$(".chosenCharacter").append($(".LegoHulk"));
// 	$(".enemyCharacters").append($(".LegoIronMan"));
// 	$(".enemyCharacters").append($(".LegoCaptainAmerica"));
// 	$(".enemyCharacters").append($(".LegoThor"));
// 	gameState.yourCharacter.push(hulkSmash);
// 	gameState.enemyCharacters.push(ironMan, captainAmerica, thorsHammer);
// });





	// Create function for attacking. 

	function battleArena() {

	if  

		($(".LegoIronMan").on("click", function() {
			$(".chosenCharacter").append($(".LegoIronMan"));
			$(".enemyCharacters").append($(".LegoCaptainAmerica"));
			$(".enemyCharacters").append($(".LegoThor"));
			$(".enemyCharacters").append($(".LegoHulk"));
			gameState.yourCharacter = ironMan;
			gameState.enemyCharacters = captainAmerica, thorsHammer, hulkSmash;
			console.log("I think somethings up...");
		}))
	{



		if (gameState.yourCharacter = ironMan) {

			$(".LegoThor").on("click", function () {
				$(".defendant").append($("LegoThor"));
				console.log("Where's my hammer?!?!?!");
			});

			$(".LegoCaptainAmerica").on("click", function () {
				$(".defendant").append($("LegoCaptainAmerica"));
				console.log("Can't we all just settle this over a drink?");
			});

			$(".LegoHulk").on("click", function () {
				$(".defendant").append($("LegoHulk"));
				console.log("HULK SMASH!!");
			});
 
			if (gameState.enemyCharacters = captainAmerica) {
				// console.log("IT STILL WORKING!!!!");


				// function for attack button. Make button look cooler. 

				$(".attack").on("click", function() {

					if (ironMan.healthPoints > 0) {
						captainAmerica.healthPoints -= ironMan.attackDamage;
						ironMan.healthPoints -= captainAmerica.attackDamage;
						ironMan.attackDamage += 8;
						$(".results").html("<p>You attacked for " + ironMan.attackDamage + "</p>" + "<p>Your defender attacked you for " + captainAmerica.attackDamage + "</p>");
					} else if (captainAmerica.healthPoints <= 0) {
						$(".results").html("You beat Captain America! Choose another character too attack.");

					} else if (ironMan.healthPoints <= 0) {
						gameOver();
					}
					

				});
			};
		};

	}

	};


battleArena();

// restart button for after you win/lose. 
	function gameOver() {
		$("#gameIsOver").html("<h2>Game Over! Press the button to restart!" +"<br> " + "<div class='btn-group' role='group' aria-label='...'>" + 
            "<button type='button' class='btn btn-default reset'>Restart</button>" + 
          "</div> </br> </h2>");
		$(".reset").on("click", function() {
			location.reload();
		});
	}

})