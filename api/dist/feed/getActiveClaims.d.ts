import type { AuthObject } from "../utils/public";
import type { ActiveClaim } from "./models";
/**
 * A call to this function returns information about all
 * (1000 max) active set claims.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @example
 * ```
 * const activeClaims = await getActiveClaims(authorization);
 * ```
 *
 * @returns An array containing metadata about all active claims.
 * ```
 * [
 *   {
 *     id: 7044,
 *     user: "blendedsea",
 *     gameId: 19212,
 *     gameTitle: "SpongeBob SquarePants: Battle for Bikini Bottom",
 *     gameIcon: "/Images/059776.png",
 *     consoleName: "PlayStation 2",
 *     claimType: 0,
 *     setType: 0,
 *     status: 0,
 *     extension: 0,
 *     special: 0,
 *     created: "2022-10-04 00:25:06",
 *     doneTime: "2023-01-04 00:25:06",
 *     updated: "2022-10-04 00:25:06",
 *     minutesLeft: 112523
 *   }
 * ]
 * ```
 */
export declare const getActiveClaims: (authorization: AuthObject) => Promise<ActiveClaim[]>;