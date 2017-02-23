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
	hasBeenClicked: false,
	healthPoints: 120,
	attackDamage: 2,
}

var captainAmerica = {
	hasBeenClicked: false,
	healthPoints: 5000,
	attackDamage: 500,
}

var thors = {
	hasBeenClicked: false,
	healthPoints: 6000,
	attackDamage: 600,
}

var hulkSmash = {
	hasBeenClicked: false,
	healthPoints: 9000,
	attackDamage: 900,
}


	
ironManPreBattle();

function ironManPreBattle() {

		$(".LegoIronMan").on("click", function() {
		ironMan.hasBeenClicked = true;
	
		$(".chosenCharacter").append($(".LegoIronMan"));
		$(".enemyCharacters").append($(".LegoCaptainMerica"));
		$(".enemyCharacters").append($(".LegoThor"));
		$(".enemyCharacters").append($(".LegoHulk"));
		gameState.yourCharacter = ironMan;
		console.log(gameState);

		chooseDefender();

		});

};

function chooseDefender() {
	//create on click function to move characters after someone selects first target. 

	$(".LegoCaptainMerica").on("click", function() {
		captainAmerica.hasBeenClicked = true;

		if (captainAmerica.hasBeenClicked) {
			gameState.enemyCharacters = captainAmerica;
			$(".defendant").append($(".LegoCaptainMerica"));
			ironMansBattle();
			console.log("Can't we all just settle this over a drink?");
			console.log(gameState);
		}
	});


	$(".LegoThor").on("click", function() {
	thors.hasBeenClicked = true;

		if (thors.hasBeenClicked) {
			gameState.enemyCharacters = thors;
			$(".defendant").append($(".LegoThor"));
			ironMansBattle();
			console.log("Where's my hammer?!?!?!");
			console.log(gameState);
		}

	});
	


	$(".LegoHulk").on("click", function() {
		hulkSmash.hasBeenClicked = true;

		if (hulkSmash.hasBeenClicked) {
			gameState.enemyCharacters = hulkSmash;
			$(".defendant").append($(".LegoHulk"));
			ironMansBattle();
			console.log("HULK SMASH!!");
			console.log(gameState);
		}
	});	
	
};	





// Create function for attacking. in this case, just Iron Man is attacking.
function ironMansBattle() {

	if (gameState.enemyCharacters = captainAmerica) {

		// function for attack button. Make button look cooler. Which is done in HTML...
		$(".attack").on("click", function() {

			if (ironMan.healthPoints > 0) {
				captainAmerica.healthPoints -= ironMan.attackDamage;
				ironMan.healthPoints -= captainAmerica.attackDamage;
				ironMan.attackDamage += 8;
				$(".results").html("<p>You attacked for " + ironMan.attackDamage + "</p>" + "<p>The defender attacked you for " + captainAmerica.attackDamage + "</p>");
			} else if (captainAmerica.healthPoints <= 0) {
				battleWinner();
				$(".results").html("You beat the Captain! Choose another character too attack.");
			} else if (ironMan.healthPoints <= 0) {
				gameOver();
				$(".LegoIronMan").hide();
			}
		});
	}

	else if (gameState.enemyCharacters = thors) {

		$(".attack").on("click", function() {

			if (ironMan.healthPoints > 0) {
				thors.healthPoints -= ironMan.attackDamage;
				ironMan.healthPoints -= thors.attackDamage;
				ironMan.attackDamage += 8;
				$(".results").html("<p>You attacked for " + ironMan.attackDamage + "</p>" + "<p>The defender attacked you for " + thors.attackDamage + "</p>");
			} else if (thors.healthPoints <= 0) {
				battleWinner();
				$(".results").html("You beat Thor! Choose another character too attack.");
			} else if (ironMan.healthPoints <= 0) {
				gameOver();
				$(".LegoIronMan").hide();
			}					
		});
	}

	else if (gameState.enemyCharacters = hulkSmash) {

		$(".attack").on("click", function() {

			if (ironMan.healthPoints > 0) {
				hulkSmash.healthPoints -= ironMan.attackDamage;
				ironMan.healthPoints -= hulkSmash.attackDamage;
				ironMan.attackDamage += 8;
				$(".results").html("<p>You attacked for " + ironMan.attackDamage + "</p>" + "<p>The defender attacked you for " + hulkSmash.attackDamage + "</p>");
			} else if (hulkSmash.healthPoints <= 0) {
				battleWinner();
				$(".results").html("You beat Hulk! Choose another character too attack.");
			} else if (ironMan.healthPoints <= 0) {
				gameOver();
				$(".LegoIronMan").hide();
			}
		});
	};
	
}



// function to run if you beat the other player
function battleWinner() {
	$(".defendant").empty();
	console.log(gameState);
	// selectAnother();
}


// function to select another enemy after the battle is won. 
function selectAnother() {

}


// restart button for after you win/lose. 
	function gameOver() {
		$("#gameIsOver").html("<h2>Game Over! You Dead! Press the button to restart!" +"<br> " + "<div class='btn-group' role='group' aria-label='...'>" + 
            "<button type='button' class='btn btn-default reset'>Restart</button>" + 
          "</div> </br> </h2>");
		$(".results").empty();
		$(".reset").on("click", function() {
			location.reload();
		});
		console.log(gameState);
	}

})