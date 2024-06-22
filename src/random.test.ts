/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Random class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { Random } from './mod.ts';

describe('Random', () => {
  describe('Random.createSeed', () => {
    it('should create a random seed', () => {
      const seed1 = Random.createSeed();
      const seed2 = Random.createSeed();

      assertEquals(seed1.length, 4);
      assertEquals(seed2.length, 4);
      assertEquals(seed1 !== seed2, true);
    });

    it('should create a seed', () => {
      const seed1 = Random.createSeed('hello world');
      const seed2 = Random.createSeed('hello world');

      assertEquals(seed1.length, 4);
      assertEquals(seed2.length, 4);
      assertEquals(seed1, seed2);
    });
  });

  describe('constructor', () => {
    it('should create a new instance', () => {
      const random = new Random();

      assertEquals(random instanceof Random, true);
    });

    it('should create a new instance with a seed', () => {
      const seed = Random.createSeed('hello world');
      const random = new Random(seed);

      assertEquals(random instanceof Random, true);
    });
  });

  describe('next', () => {
    it('should return a random number', () => {
      const random = new Random();
      const number = random.next();

      assertEquals(number >= 0 && number < Number.MAX_SAFE_INTEGER, true);
    });

    it('should return a random number between 0 and 10', () => {
      const random = new Random();
      const number = random.next(10);

      assertEquals(number >= 0 && number < 10, true);
    });

    it('should return a random number between 5 and 10', () => {
      const random = new Random();
      const number = random.next(5, 10);

      assertEquals(number >= 5 && number < 10, true);
    });
  });

  describe('next - seeded', () => {
    it('should return a random number', () => {
      const seed = Random.createSeed('hello world');
      const random = new Random(seed);

      assertEquals(random.next(), 649809414);
      assertEquals(random.next(), 3427233928);
      assertEquals(random.next(), 1502526654);
    });

    it('should return a random number between 0 and 10', () => {
      const seed = Random.createSeed('hello world');
      const random = new Random(seed);

      assertEquals(random.next(10), 4);
      assertEquals(random.next(10), 8);
      assertEquals(random.next(10), 4);
    });

    it('should return a random number between 5 and 10', () => {
      const seed = Random.createSeed('hello world');
      const random = new Random(seed);

      assertEquals(random.next(5, 10), 9);
      assertEquals(random.next(5, 10), 8);
      assertEquals(random.next(5, 10), 9);
    });
  });

  describe('nextBytes', () => {
    it('should return random bytes', () => {
      const random = new Random();
      const bytes = random.nextBytes(10);

      assertEquals(bytes.length, 10);
    });
  });

  describe('nextBytes - seeded', () => {
    it('should return random bytes', () => {
      const seed = Random.createSeed('hello world');
      const random = new Random(seed);

      assertEquals(
        random.nextBytes(10),
        Uint8Array.from([6, 136, 190, 228, 177, 158, 130, 41, 242, 55]),
      );
      assertEquals(
        random.nextBytes(5),
        Uint8Array.from([135, 235, 62, 172, 67]),
      );
    });
  });
});
