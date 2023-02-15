
//Inicio Menu Dinamico

$('.plus-btn').click(function(){
  $('body').toggleClass('menu-open');
})

//Fin Menu Dinamico





//Inicio Dibujo Dinamico
var classes_to_remove = ["look-right","look-left", "look-down", "look-up","look-down-right","look-down-left","look-up-right","look-up-left"];

function removeClasses () {
	for(var x = 0;x<classes_to_remove.length;x++) {
		$(".head").removeClass(classes_to_remove[x]);
		$(".hair").removeClass(classes_to_remove[x]);
		$(".neck").removeClass(classes_to_remove[x]);
	}
}

function direction(e) {
	//look left
	if( e.clientX<= window.innerWidth/2) { 
		removeClasses();

		$(".head").addClass("look-left");
		$(".hair").addClass("look-left");
		$(".neck").addClass("look-left");
	}
 	//look right
	if( e.clientX >= (window.innerWidth-(window.innerWidth/2))) { 
		removeClasses();

		$(".head").addClass("look-right");
		$(".hair").addClass("look-right");
		$(".neck").addClass("look-right");
	}
  	//look down
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5))) {
		removeClasses();

		$(".head").addClass("look-down");
		$(".hair").addClass("look-down");
		$(".neck").addClass("look-down");
	}

	// look up  
	if( e.clientY <= ((window.innerHeight/2.5))) { 
		removeClasses();

		$(".head").addClass("look-up");
		$(".hair").addClass("look-up");
		$(".neck").addClass("look-up");
	}

	// look down right 
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();

		$(".head").addClass("look-down-right");
		$(".hair").addClass("look-down-right");
		$(".neck").addClass("look-down-right");
	}

	// look down left
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();

		$(".head").addClass("look-down-left");
		$(".hair").addClass("look-down-left");
		$(".neck").addClass("look-down-left");
	}

	// look up right 
	if( e.clientY <= ((window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();

		$(".head").addClass("look-up-right");
		$(".hair").addClass("look-up-right");
		$(".neck").addClass("look-up-right");
	}

	// look down left
	if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();

		$(".head").addClass("look-up-left");
		$(".hair").addClass("look-up-left");
		$(".neck").addClass("look-up-left");
	}

	if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) && 
	 e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
		removeClasses();
	}
}
window.addEventListener("mousemove", function (e) {
  	direction(e);
})

//Fin Dibujo Dinamico










import { buildAuthorization } from "../node_modules/@retroachievements/api";
import { getGame } from "../node_modules/@retroachievements/api";
import { getUserSummary } from "../node_modules/@retroachievements/api";
import { getAchievementOfTheWeek } from "../node_modules/@retroachievements/api";

const userName = "Akissame";
const webApiKey = "HLZerHixAZw3JE0S56L2uRhrNtIF2PDF";
const authorization = buildAuthorization({ userName, webApiKey });

// This returns basic metadata about the game on this page:
// https://retroachievements.org/game/14402
getGame(authorization, { gameId: 785 }).then((game) => {
	const gameJson = JSON.stringify(game);
	document.getElementById("game-info").innerText = gameJson;
  });


  getUserSummary(authorization, { userName: "Akissame" })
  .then(userSummary => console.log(userSummary))
  .catch(error => console.error(error));


  getAchievementOfTheWeek(authorization, {})
  .then(achievementOfTheWeek => console.log(achievementOfTheWeek))
  .catch(error => console.error(error));
