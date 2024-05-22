/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the AssertionException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  AssertionException,
  Exception,
  InvalidException,
  ValueException,
} from './mod.ts';

describe('AssertionException', () => {
  const CODE = 36;
  const NAME = 'AssertionException';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new AssertionException('An error occurred.');
    it('should extend the Error, Exception, InvalidException, and ValueException class', () => {
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'The two values are not equal.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new AssertionException(MSG);

    it('should create a new AssertionException instance with the specified message description', () => {
      assertInstanceOf(exc, AssertionException);
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
