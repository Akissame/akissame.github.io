import type { AuthObject } from "../utils/public";
import type { UserRecentlyPlayedGames } from "./models";
/**
 * A call to this function will retrieve a list of a target user's
 * recently played games, via their username.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.userName The user for which to retrieve the summary for.
 *
 * @param payload.count Optional. Defaults to 10. Max is 50. How many
 * recently played games for the user to retrieve.
 *
 * @param payload.offset Optional. Defaults to 0. Number of recently played
 * game entries to skip. This can be used for pagination.
 *
 * @example
 * ```
 * const userRecentlyPlayedGames = await getUserRecentlyPlayedGames(
 *   authorization,
 *   { userName: "xelnia" }
 * );
 * ```
 *
 * @returns An array containing metadata about a user's recently played games.
 * ```json
 * [
 *   {
 *     gameId: 19010,
 *     consoleId: 21,
 *     consoleName: "PlayStation 2",
 *     title: "Simpsons, The: Hit & Run",
 *     imageIcon: "/Images/066024.png",
 *     lastPlayed: "2022-10-24 22:05:12",
 *     numPossibleAchievements: 131,
 *     possibleScore: 865,
 *     numAchieved: 23,
 *     scoreAchieved: 84,
 *     numAchievedHardcore: 23,
 *     scoreAchievedHardcore: 84
 *   }
 * ]
 * ```
 */
export declare const getUserRecentlyPlayedGames: (authorization: AuthObject, payload: {
    userName: string;
    offset?: number;
    count?: number;
}) => Promise<UserRecentlyPlayedGames>;
