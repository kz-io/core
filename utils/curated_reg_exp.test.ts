/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the CuratedRegExp class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertMatch, assertThrows } from '@std/assert';
import { RegExpFlags, RegExpUtils } from './mod.ts';

describe('CuratedRegExp', () => {
  describe('NEW_LINE', () => {
    it('should match a new line character', () => {
      const regex = RegExpUtils.NEW_LINE;

      assertMatch('\n', regex);
      assertMatch('\r\n', regex);
      assertMatch('\r', regex);
    });
  });

  describe('ALPHA', () => {
    it('should match alphabetic characters', () => {
      const regex = RegExpUtils.ALPHA;

      assertMatch('abCDjkaibjneb', regex);
      assertMatch('ABC', regex);
      assertMatch('abc', regex);
      assertMatch('a', regex);
    });
  });

  describe('ALPHA_NUMERIC', () => {
    it('should match alphanumeric characters', () => {
      const regex = RegExpUtils.ALPHA_NUMERIC;

      assertMatch('abCDjkaibjneb123', regex);
      assertMatch('ABC123', regex);
      assertMatch('abc123', regex);
      assertMatch('a1', regex);
    });
  });

  describe('NUMERIC', () => {
    it('should match numeric characters', () => {
      const regex = RegExpUtils.NUMERIC;

      assertMatch('1234567890', regex);
      assertMatch('123', regex);
      assertMatch('0', regex);
    });
  });
});