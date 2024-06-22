/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Random class.
 */

import { createSeed, getRandomSeedValue } from './_internal/mod.ts';

/**
 * A class representing a random number generator.
 */
export class Random {
  /**
   * Creates a seed.
   *
   * @param seedValue The seed value.
   * @returns The seed hash.
   */
  public static createSeed(
    seedValue: string = getRandomSeedValue(),
  ): [number, number, number, number] {
    return createSeed(seedValue);
  }

  /**
   * Creates a new `Random` instance.
   *
   * @param seed The seed.
   */
  constructor(
    protected seed: [number, number, number, number] = Random.createSeed(),
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
   */
  public next(): number;

  /**
   * Returns the next random number between 0 and a maximum value.
   *
   * @param max The maximum value.
   * @returns The next random number between 0 and a maximum value.
   */
  public next(max: number): number;

  /**
   * Generates the next random number between a minimum and maximum value.
   *
   * @param min The minimum value.
   * @param max The maximum value.
   * @returns The next random number between a minimum and maximum value.
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
   * Returns the next random bytes.
   *
   * @param length The length of the bytes.
   * @returns The next random bytes.
   */
  public nextBytes(length: number): Uint8Array {
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = this.next(256);
    }

    return bytes;
  }
}
