/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Range class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { Range } from './mod.ts';

describe('Range', () => {
  describe('length', () => {
    it('should return the length of the range', () => {
      const range = new Range(0, 5);
      assertEquals(range.length, 5);
    });
  });

  describe('first', () => {
    it('should return the first number in the range', () => {
      const range = new Range(0, 5);
      assertEquals(range.first, 0);
    });
  });

  describe('last', () => {
    it('should return the last number in the range', () => {
      const range = new Range(0, 5);
      assertEquals(range.last, 5);
    });
  });

  describe('toArray', () => {
    it('should return an array of numbers in the range', () => {
      const range = new Range(0, 5);
      assertEquals(range.toArray(), [0, 1, 2, 3, 4, 5]);
    });

    it('should return an array of numbers in the range when the start is greater than the end', () => {
      const range = new Range(5, 0);
      assertEquals(range.toArray(), [5, 4, 3, 2, 1, 0]);
    });
  });

  describe('Symbol.iterator', () => {
    it('should return an iterator for the range', () => {
      const range = new Range(0, 5);
      const values = Array.from(range);

      assertEquals(values, [0, 1, 2, 3, 4, 5]);
    });

    it('should return an iterator for the range when the start is greater than the end', () => {
      const range = new Range(5, 0);
      const values = Array.from(range);

      assertEquals(values, [5, 4, 3, 2, 1, 0]);
    });
  });
});
