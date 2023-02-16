import { buildAuthorization } from "./@retroachievements/api";
import { getGame } from "./@retroachievements/api";
const userName = "Akissame";
const webApiKey = "HLZerHixAZw3JE0S56L2uRhrNtIF2PDF";
const authorization = buildAuthorization({ userName, webApiKey });

getGame(authorization, { gameId: 785 }).then((game) => {
	const gameJson = JSON.stringify(game, null, 2);
	document.getElementById("game-info").textContent = gameJson;
});