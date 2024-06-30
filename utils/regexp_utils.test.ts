/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the RegExpUtils utility class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertThrows } from '@std/assert';
import { RegExpFlags, RegExpUtils } from './mod.ts';

describe('RegExpUtils', () => {
  describe('flagsToEnum', () => {
    it('should convert a string of flags to a number', () => {
      const flags = 'dgi';
      const result = RegExpUtils.flagsToEnum(flags);

      assertEquals(
        result,
        RegExpFlags.Indices | RegExpFlags.Global | RegExpFlags.IgnoreCase,
      );
    });

    it('should throw an error for an invalid flag', () => {
      const flags = 'dgiq';

      assertThrows(() => {
        RegExpUtils.flagsToEnum(flags);
      });
    });
  });

  describe('enumToFlags', () => {
    it('should convert a number to a string of flags', () => {
      const flags = RegExpFlags.Indices | RegExpFlags.Global |
        RegExpFlags.IgnoreCase;
      const result = RegExpUtils.enumToFlags(flags);

      assertEquals(result, 'dgi');
    });
  });
});
