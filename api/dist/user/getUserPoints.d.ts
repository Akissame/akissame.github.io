import type { AuthObject } from "../utils/public";
import type { UserPoints } from "./models";
/**
 * A call to this function will retrieve a given user's hardcore
 * and softcore points.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.userName The user for which to retrieve the point totals for.
 *
 * @example
 * ```
 * const userPoints = await getUserPoints(
 *   authorization,
 *   { userName: "xelnia" }
 * );
 * ```
 *
 * @returns An object containing metadata about a target user's points.
 * ```json
 * {
 *   points: 7640,
 *   softcorePoints: 25
 * }
 * ```
 */
export declare const getUserPoints: (authorization: AuthObject, payload: {
    userName: string;
}) => Promise<UserPoints>;
