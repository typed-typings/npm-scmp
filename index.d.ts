/**
 * Does a constant-time string comparison by not short-circuiting
 * on first sign of non-equivalency.
 *
 * @param a The first string to be compared against the second
 * @param b The second string to be compared against the first
 */
declare function scmp (a: string, b: string): boolean;

export = scmp;
