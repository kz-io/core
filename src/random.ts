/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Random class.
 */

import { Quadruple } from '../types/mod.ts';
import { createSeed, getRandomSeedValue } from './_internal/mod.ts';

/**
 * A class providing random number generation.
 */
export class Random {
  /**
   * Creates a seed for random number generation, optionally specifying a seed value.
   *
   * Using a custom seed value rather than a generated one will result in consistent
   * results when used. This is usually only used for testing, though developers
   * may find use for it in production environments.
   *
   * @param seedValue A specified seed value for generating expected seed hashes.
   * @returns The seed hash.
   */
  public static createSeed(
    seedValue: string = getRandomSeedValue(),
  ): Quadruple<number> {
    return createSeed(seedValue);
  }

  /**
   * Creates a `Random` instance, optionally with a custom seed.
   *
   * Using a custom seed value rather than a generated one will result in
   * consistent results when used. This is usually only used for testing,
   * though developers may find use for it in production environments.
   *
   * @param seed A specified seed for generating expected hashes.
   */
  constructor(
    protected seed: Quadruple<number> = Random.createSeed(),
  ) {}

  /**
   * Generates the next random number.
   *
   * @returns The next random number.
   */
  protected internalNext(): number {
    let [a, b, c, d] = this.seed;

    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;

    const t = (a + b | 0) + d | 0;

    d = d << 11 | d >>> 21;
    a = a ^ t;
    a = a << 7 | a >>> 25;
    b = b + a | 0;
    c = c + b | 0;
    d = d + c | 0;

    this.seed = [a, b, c, d];

    return t;
  }

  /**
   * Returns the next random number.
   *
   * @returns The next random number.
   *
   * @example
   * ```ts
   * import { Random } from './random.ts';
   *
   * const random = new Random();
   *
   * const n1 = random.next();
   * const n2 = random.next();
   *
   * console.log(n1 !== n2); // true
   * ```
   */
  public next(): number;

  /**
   * Returns the next random number between 0 and a maximum value (exclusive).
   *
   * @param max The upper bound of the random number.
   * @returns The next random number between 0 and a maximum value (exclusive).
   *
   * @example
   * ```ts
   * import { Random } from './random.ts';
   *
   * const random = new Random();
   *
   * const n1 = random.next(10);
   *
   * console.log(n1 < 10 && n1 > 0); // true
   * ```
   */
  public next(max: number): number;

  /**
   * Returns the next random number between a minimum and maximum value (exclusive).
   *
   * @param min The lower bound of the random number.
   * @param max The upper bound of the random number.
   * @returns The next random number between a minimum and maximum value (exclusive).
   *
   * @example
   * ```ts
   * import { Random } from './random.ts';
   *
   * const random = new Random();
   *
   * const n1 = random.next(5, 10);
   *
   * console.log(n1 < 10 && n1 > 5); // true
   * ```
   */
  public next(min: number, max: number): number;
  public next(min?: number, max?: number): number {
    const t = this.internalNext();

    if (min !== undefined && max === undefined) {
      return (t >>> 0) % min;
    }

    if (min !== undefined && max !== undefined) {
      return (t >>> 0) % (max - min) + min;
    }

    return (t >>> 0);
  }

  /**
   * Returns the next random bytes, optionally of a specific length.
   *
   * @param length The number of random bytes to return.
   * @returns The next random bytes.
   *
   * @example
   * ```ts
   * import { Random } from './random.ts';
   *
   * const random = new Random();
   *
   * const n1 = random.nextBytes();
   * const n2 = random.nextBytes(4);
   *
   * console.log(n1.length); // 8
   * console.log(n2.length); // 4
   * ```
   */
  public nextBytes(length: number = 8): Uint8Array {
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = this.next(256);
    }

    return bytes;
  }
}
