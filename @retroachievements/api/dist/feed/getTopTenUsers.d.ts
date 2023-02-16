import type { AuthObject } from "../utils/public";
import type { TopTenUsers } from "./models";
/**
 * A call to this function will retrieve the current top ten users
 * on the site.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @example
 * ```
 * const topTenUsers = await getTopTenUsers(authorization);
 * ```
 *
 * @returns An array containing the list of top ten users.
 * ```json
 * [
 *   { userName: "MockUser", totalPoints: 350000, totalRatioPoints: 995000 },
 *   { userName: "MockUser2", totalPoints: 345000, totalRatioPoints: 994000 },
 *   // ...
 * ]
 * ```
 */
export declare const getTopTenUsers: (authorization: AuthObject) => Promise<TopTenUsers>;