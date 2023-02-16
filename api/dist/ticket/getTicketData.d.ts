import type { ID } from "../utils/internal";
import type { AuthObject } from "../utils/public";
import type { AchievementTicketStats, GameTicketStats, MostTicketedGames, RecentTickets, TicketEntity, UserTicketStats } from "./models";
/**
 * BEGIN: Function overload definitions
 */
/**
 * A call to this function will retrieve ticket metadata information
 * about a single achievement ticket, targeted by its ticket ID.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.ticketId The ID of the ticket to get information about.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(
 *   authorization,
 *   { ticketId: 12345 }
 * );
 * ```
 *
 * @returns An object containing metadata about a target ticket.
 */
export declare function getTicketData(authorization: AuthObject, payload: {
    ticketId: ID;
}): Promise<TicketEntity>;
/**
 * A call to this function will retrieve ticket metadata information
 * about the latest opened achievement tickets on RetroAchievements.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.count Optional. Defaults to 10. Max is 100.
 * How many tickets to retrieve.
 *
 * @param payload.offset Optional. Defaults to 0.
 * Number of tickets to skip. This can be used for pagination.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(authorization);
 * ```
 *
 * @returns A list of the most recently opened tickets on the site.
 */
export declare function getTicketData(authorization: AuthObject, payload?: Partial<{
    offset: number;
    count: number;
}>): Promise<RecentTickets>;
/**
 * A call to this function will retrieve the games on the site with
 * the highest count of opened achievement tickets.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.count Optional. Defaults to 10. Max is 100.
 * How many ticketed games to retrieve.
 *
 * @param payload.offset Optional. Defaults to 0.
 * Number of games to skip. This can be used for pagination.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(
 *   authorization,
 *   { isGettingMostTicketedGames: true }
 * );
 * ```
 *
 * @returns A list of the most recently opened tickets on the site.
 */
export declare function getTicketData(authorization: AuthObject, payload: {
    isGettingMostTicketedGames: true;
    offset?: number;
    count?: number;
}): Promise<MostTicketedGames>;
/**
 * A call to this function will retrieve an achievement developer's
 * ticket stats, targeted by that developer's username.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.userName The developer's account username to retrieve
 * ticket stats for.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(
 *   authorization,
 *   { userName: "xelnia" }
 * );
 * ```
 *
 * @returns An achievement developer's ticket stats.
 */
export declare function getTicketData(authorization: AuthObject, payload: {
    userName: string;
}): Promise<UserTicketStats>;
/**
 * A call to this function will retrieve a game's ticket stats, targeted
 * by the game's ID. If you are unsure of a game's ID, visit its page
 * on the RetroAchievements website and copy the number at the end of the URL.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.gameId The game ID to fetch ticket stats for.
 *
 * @param payload.isGettingTicketsForUnofficialAchievements Optional. Fetch stats
 * for unofficial/non-core achievements that have tickets.
 *
 * @param payload.shouldReturnTicketsList Optional. If true, not only fetches a
 * game's ticket stats, but also returns a list of tickets for the game.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(
 *   authorization,
 *   { gameId: 14_402 }
 * );
 * ```
 *
 * @returns A game's ticket stats, potentially also including the ticket list.
 */
export declare function getTicketData(authorization: AuthObject, payload: {
    gameId: ID;
    isGettingTicketsForUnofficialAchievements?: true;
    shouldReturnTicketsList?: true;
}): Promise<GameTicketStats>;
/**
 * A call to this function will retrieve the an achievement's
 * ticket stats, targeted by the achievement's ID. If you are unsure
 * of an achievement's ID, open its page on the RetroAchievements
 * website and copy the number at the end of the URL.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.achievementId The ID of the achievement to fetch ticket
 * stats for.
 *
 * @example
 * ```
 * const ticketData = await getTicketData(
 *   authorization,
 *   { achievementId: 12345 }
 * );
 * ```
 *
 * @returns An achievement developer's ticket stats.
 */
export declare function getTicketData(authorization: AuthObject, payload: {
    achievementId: ID;
}): Promise<AchievementTicketStats>;
