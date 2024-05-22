/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ValueException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import { Exception, InvalidException, ValueException } from './mod.ts';

describe('ValueException', () => {
  const CODE = 35;
  const NAME = 'ValueException';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new ValueException('An error occurred.');
    it('should extend the Error, Exception, and InvalidException class', () => {
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'The provided value is invalid.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ValueException(MSG);

    it('should create a new ValueException instance with the specified message description', () => {
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
