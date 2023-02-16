import type { ID } from "../utils/internal";
import type { AuthObject } from "../utils/public";
import type { AchievementUnlocksMetadata } from "./models";
/**
 * A call to this function will retrieve a list of users who
 * have earned a given achievement, targeted by the achievement's ID.
 *
 * @param authorization An object containing your userName and webApiKey.
 * This can be constructed with `buildAuthorization()`.
 *
 * @param payload.achievementId The target achievement we want to
 * retrieve the unlocks list for. If unknown, this can be found
 * by navigating to the achievement's page on the RetroAchievements.org
 * website. eg: https://retroachievements.org/achievement/13876 has an
 * ID of 13876.
 *
 * @param payload.offset Defaults to 0. The number of entries to skip.
 *
 * @param payload.count Defaults to 50, has a max of 500.
 *
 * @example
 * ```
 * const achievementUnlocks = await getAchievementUnlocks(
 *   authorization,
 *   { achievementId: 13876 }
 * );
 * ```
 *
 * @returns An array containing metadata about unlocks for
 * the target achievement.
 * ```
 * [
 *   {
 *     user: 'Podgicus0305',
 *     raPoints: 15544,
 *     dateAwarded: '2022-07-12 19:06:34',
 *     hardcoreMode: true
 *   }
 * ]
 * ```
 */
export declare const getAchievementUnlocks: (authorization: AuthObject, payload: {
    achievementId: ID;
    offset?: number;
    count?: number;
}) => Promise<AchievementUnlocksMetadata>;
