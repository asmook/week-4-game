$(document).ready(function(){
	var character= {
		whateverMom: {
			name: "",
			health: 80,
			attack: 70,
			counter: 79,
			image: "",
		},


		brattyBarista: {
			name: "",
			health: 60,
			attack: 30,
			counter: 10,
			image: "",
		},



		cryingBaby: {
			name: "",
			health: 100,
			attack: 20,
			counter: 50,
			image: "",
		},



		randomCodingNerds: {
			name: "",
			health: 60,
			attack: 30,
			counter: 120,
			image: "",
		},

	}

	var attackerSelected= false;
	var defenderSelected= false;
	var attacker={};
	var defender={};
	var remainingCharacters= {}; //not sure yet if these should be an object or an array

	$("#attitude").on("click", function(event){
		event.preventDefault();
		

		if(attackerSelected ===true && defenderSelected ===true){
			alert("attitude");
		}else{
			alert("choose player before you throw attitude shade")
		}
	});
});