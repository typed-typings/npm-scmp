/**
 * Does a constant-time Buffer comparison by not short-circuiting
 * on first sign of non-equivalency.
 *
 * @param a The first Buffer to be compared against the second
 * @param b The second Buffer to be compared against the first
 */
declare function scmp (a: Buffer, b: Buffer): boolean;

export = scmp;
