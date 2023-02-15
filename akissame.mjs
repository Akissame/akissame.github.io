import { buildAuthorization } from "node_modules/@retroachievements/api";
import { getGame } from "node_modules/@retroachievements/api";
import { getUserSummary } from "node_modules/@retroachievements/api";
import { getAchievementOfTheWeek } from "node_modules/@retroachievements/api";

const userName = "Akissame";
const webApiKey = "HLZerHixAZw3JE0S56L2uRhrNtIF2PDF";
const authorization = buildAuthorization({ userName, webApiKey });

// This returns basic metadata about the game on this page:
// https://retroachievements.org/game/14402
getGame(authorization, { gameId: 785 })
  .then(game => console.log(game))
  .catch(error => console.error(error));


  getUserSummary(authorization, { userName: "Akissame" })
  .then(userSummary => console.log(userSummary))
  .catch(error => console.error(error));


  getAchievementOfTheWeek(authorization, {})
  .then(achievementOfTheWeek => console.log(achievementOfTheWeek))
  .catch(error => console.error(error));