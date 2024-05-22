/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the MemoryWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '../../exceptions/mod.ts';

import { MemoryWarning, OSWarning, Warning } from './mod.ts';

describe('MemoryWarning', () => {
  const CODE = 74;
  const NAME = 'MemoryWarning';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new MemoryWarning('An error occurred.');
    it('should extend the Error, Exception, Warning, and OSWarning class', () => {
      assertInstanceOf(exc, OSWarning);
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'Memory use exceeded 90%.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new MemoryWarning(MSG);

    it('should create a new MemoryWarning instance with the specified message description', () => {
      assertInstanceOf(exc, MemoryWarning);
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
