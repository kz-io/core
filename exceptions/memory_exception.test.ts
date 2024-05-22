/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the MemoryException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import { Exception, MemoryException, OSException } from './mod.ts';

describe('MemoryException', () => {
  const CODE = 2;
  const NAME = 'MemoryException';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new MemoryException('An error occurred.');
    it('should extend the Error, Exception, and OSException class', () => {
      assertInstanceOf(exc, OSException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'No more memory is available.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new MemoryException(MSG);

    it('should create a new MemoryException instance with the specified message description', () => {
      assertInstanceOf(exc, MemoryException);
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
